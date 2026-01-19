import os
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient, ReturnDocument
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# ==============================
# MONGODB CONNECTION
# ==============================
MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["SmartXML_DB"]

services_col = db["services"]
contacts_col = db["contactinfo"]
counters_col = db["counters"] # To manage auto-incrementing IDs

def get_next_sequence(name):
    """Generates a simple integer ID (1, 2, 3...)"""
    count_doc = counters_col.find_one_and_update(
        {"_id": name},
        {"$inc": {"seq": 1}},
        upsert=True,
        return_document=ReturnDocument.AFTER
    )
    return count_doc["seq"]

def initialize_db():
    try:
        client.admin.command('ping')
        if services_col.count_documents({"service_id": 1}) == 0:
            services_col.insert_one({
                "service_id": 1,
                "xml_conversion": 35,
                "tagging_structuring": 20,
                "validation": 15,
                "digitization": 10,
                "quality_services": 20
            })
        print("✅ MongoDB Atlas Connected & Initialized")
    except Exception as e:
        print(f"❌ Connection Error: {e}")

initialize_db()

# ==============================
# CONTACT ROUTES
# ==============================

@app.route("/api/contacts/all", methods=["GET"])
def get_all_contacts():
    contacts = list(contacts_col.find().sort("cid", -1)) # Newest first
    output = []
    for c in contacts:
        output.append({
            "id": c.get("cid"), # Using our custom simple integer ID
            "name": c.get("contactname"),
            "email": c.get("contactmail"),
            "phone": c.get("contactno"),
            "message": c.get("contactmsg")
        })
    return jsonify(output), 200

@app.route("/api/contact/save", methods=["POST"])
def contact_form():
    data = request.json
    email = data.get("email")
    phone = data.get("phone")

    # Check for Unique Email or Phone
    existing = contacts_col.find_one({
        "$or": [
            {"contactmail": email},
            {"contactno": phone}
        ]
    })

    if existing:
        return jsonify({"error": "Email or Phone Number already exists. Please use another one."}), 409

    try:
        contacts_col.insert_one({
            "cid": get_next_sequence("contact_id"), # Auto-incrementing 1, 2, 3...
            "contactname": data.get("name"),
            "contactmail": email,
            "contactno": phone,
            "contactmsg": data.get("message")
        })
        return jsonify({"message": "✅ Message Sent Successfully!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/contact/delete/<int:contact_id>", methods=["DELETE"])
def delete_contact(contact_id):
    # Now we just filter by the simple integer 'cid'
    result = contacts_col.delete_one({"cid": contact_id})
    if result.deleted_count > 0:
        return jsonify({"success": True}), 200
    return jsonify({"success": False, "message": "Record not found"}), 404

# ==============================
# SERVICE ROUTES (Same as before)
# ==============================
@app.route("/api/service/get", methods=["GET"])
def get_service():
    service = services_col.find_one({"service_id": 1}, {"_id": 0})
    return jsonify(service) if service else (jsonify({"error": "No data"}), 404)

@app.route("/api/service/update", methods=["POST"])
def update_service():
    data = request.json
    services_col.update_one({"service_id": 1}, {"$set": data})
    return jsonify({"message": "Updated"}), 200

@app.route("/")
@app.route("/dashboard")
def dashboard(): return render_template("dashboard.html")

if __name__ == "__main__":
    app.run(debug=True)