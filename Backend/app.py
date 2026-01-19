from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import sqlite3
import os

app = Flask(__name__)

CORS(app)

DB_NAME = "SmartXML.db"

# ==============================
# CREATE SERVICES TABLE
# ==============================
def create_service_db():
    conn = sqlite3.connect(DB_NAME)
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS services (
            id INTEGER PRIMARY KEY,
            xml_conversion INTEGER,
            tagging_structuring INTEGER,
            validation INTEGER,
            digitization INTEGER,
            quality_services INTEGER
        )
    """)

    cur.execute("SELECT COUNT(*) FROM services")
    if cur.fetchone()[0] == 0:
        cur.execute("""
            INSERT INTO services (
                id, xml_conversion, tagging_structuring, validation, digitization, quality_services
            ) VALUES (1, 35, 20, 15, 10, 20)
        """)

    conn.commit()
    conn.close()

create_service_db()

# ==============================
# CREATE CONTACT TABLE
# ==============================
def create_infodb():
    conn = sqlite3.connect(DB_NAME)
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS contactinfo (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            contactname TEXT,
            contactmail TEXT,
            contactno TEXT,
            contactmsg TEXT
        )
    """)
    conn.commit()
    conn.close()

create_infodb()

# ==============================
# API ROUTES
# ==============================
@app.route("/api/contacts/all", methods=["GET"])
def get_all_contacts():
    conn = sqlite3.connect(DB_NAME)
    cur = conn.cursor()
    cur.execute("SELECT * FROM contactinfo")
    rows = cur.fetchall()
    conn.close()

    contacts = []
    for row in rows:
        contacts.append({
            "id": row[0],
            "name": row[1],
            "email": row[2],
            "phone": row[3],
            "message": row[4]
        })

    return jsonify(contacts), 200


@app.route("/api/contact/save", methods=["POST"])
def contact_form():
    data = request.json

    contactname = data.get("name")
    contactmail = data.get("email")
    contactno = data.get("phone")
    contactmsg = data.get("message")

    if not contactname or not contactmail or not contactmsg:
        return jsonify({"error": "Missing required fields"}), 400

    conn = sqlite3.connect(DB_NAME)
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO contactinfo (contactname, contactmail, contactno, contactmsg) VALUES (?, ?, ?, ?)",
        (contactname, contactmail, contactno, contactmsg)
    )
    conn.commit()
    conn.close()

    return jsonify({"message": "✅ Message Sent Successfully!"}), 200


@app.route("/api/contact/delete/<int:contact_id>", methods=["DELETE"])
def delete_contact(contact_id):
    conn = sqlite3.connect(DB_NAME)
    cur = conn.cursor()
    cur.execute("DELETE FROM contactinfo WHERE id = ?", (contact_id,))
    conn.commit()
    conn.close()

    return jsonify({"success": True, "message": "Deleted successfully"}), 200


@app.route("/api/service/get", methods=["GET"])
def get_service():
    conn = sqlite3.connect(DB_NAME)
    cur = conn.cursor()
    cur.execute("SELECT * FROM services WHERE id = 1")
    service = cur.fetchone()
    conn.close()

    if not service:
        return jsonify({"error": "Service not found"}), 404

    return jsonify({
        "id": service[0],
        "xml_conversion": service[1],
        "tagging_structuring": service[2],
        "validation": service[3],
        "digitization": service[4],
        "quality_services": service[5]
    }), 200


@app.route("/api/service/update", methods=["POST"])
def update_service():
    data = request.json

    conn = sqlite3.connect(DB_NAME)
    cur = conn.cursor()
    cur.execute("""
        UPDATE services SET
        xml_conversion = ?,
        tagging_structuring = ?,
        validation = ?,
        digitization = ?,
        quality_services = ?
        WHERE id = 1
    """, (
        data.get("xml_conversion"),
        data.get("tagging_structuring"),
        data.get("validation"),
        data.get("digitization"),
        data.get("quality_services")
    ))

    conn.commit()
    conn.close()

    return jsonify({"message": "✅ Service Updated Successfully!"}), 200

# ==============================
# PAGE ROUTES
# ==============================
@app.route("/")
@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

@app.route("/login")
def login():
    return render_template("login.html")

# ==============================
# RUN APP (RENDER SAFE)
# ==============================
if __name__ == "__main__":
    app.run(debug=False)
