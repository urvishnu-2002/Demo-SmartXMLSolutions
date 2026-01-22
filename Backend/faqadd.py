from pymongo import MongoClient

# Connect to MongoDB
MONGO_URI="mongodb+srv://urvishnu:urvishnu1546@mydbcluster.kczb8ak.mongodb.net/?appName=MyDbCluster"
client = MongoClient(MONGO_URI)
db = client["SmartXML_DB"]
querries_col = db["faq_data"]

# Your original dictionary
faq_data = {
    "hello": "Hello! Welcome to Smart XML Solutions. How can I assist you today?",
    "hi": "Hi there! How may I help you?",
    "good morning": "Good morning! How can I support you today?",
    "good evening": "Good evening! How may I assist you?",
    "bye": "Goodbye! Thank you for visiting Smart XML Solutions. Have a great day!",
    "see you": "See you soon! Wishing you success.",
    "how are you": "I am here and ready to help you anytime.",
    "what is your company name": "Smart-XML-Solutions.",
    "What does your company do?": "We help organizations convert unstructured and legacy content into accurate, structured XML and digital formats.",
    "where are you located": "We are headquartered globally with remote service capabilities.",
    "what industries do you serve": "We serve publishing, legal, academic, government, and corporate industries.",
    "what is your mission": "Our mission is to simplify digital transformation with structured XML solutions.",
    "do you provide training": "Yes, we provide training sessions on XML workflows and best practices.",
    "do you offer consulting": "Yes, we offer consulting for XML strategy and digital publishing.",
    "do you have partnerships": "Yes, we collaborate with technology providers and publishing platforms.",
    "do you provide support": "Yes, we provide ongoing technical and customer support.",
    "what is smart xml solutions": "Smart XML Solutions is a data services company specializing in XML conversion, content digitization, data validation, and structured data processing.",
    "what is xml conversion": "XML conversion is the process of transforming documents like PDF, Word, HTML, or legacy formats into structured XML.",
    "what services do you provide": "XML Conversion (PDF, DOC, HTML to XML), XML Tagging & Structuring, DTD/XSD Validation, Content Digitization, Data Quality & Validation Services.",
    "Which formats do you convert to XML?": "We convert PDF, Word, InDesign, HTML, and legacy document formats into XML.",
    "Why should I convert my data to XML?": "XML improves data structure, scalability, reusability, system integration, and long-term storage.",
    "Do you follow industry XML standards?": "Yes, all XML outputs follow client-defined or industry-standard DTD and XSD schemas.",
    "can you convert pdf to xml": "Yes, we can convert PDF documents into structured XML.",
    "can you convert word to xml": "Yes, Word documents can be converted into XML format.",
    "can you convert excel to xml": "Yes, Excel spreadsheets can be transformed into XML.",
    "What is XML tagging?": "XML tagging involves assigning structured tags to content elements like headings, paragraphs, tables, and metadata.",
    "Why is XML tagging important?": "It ensures semantic clarity, content reuse, automation support, and system compatibility.",
    "can you tag equations": "Yes, mathematical equations can be tagged in XML.",
    "do you support custom tags": "Yes, we support custom tagging based on client requirements.",
    "can you tag audio transcripts": "Yes, we can tag transcripts for accessibility and indexing.",
    "can you tag video metadata": "Yes, video metadata can be structured in XML.",
    "What is DTD validation?": "DTD validation checks whether an XML file follows predefined structural rules.",
    "What is XSD validation?": "XSD validation ensures XML data structure, data types, and hierarchy are correct.",
    "Why is XML validation necessary?": "Validation prevents errors, improves data consistency, and ensures smooth integration with other systems.",
    "do you validate against schema": "Yes, we validate XML against DTD/XSD schemas.",
    "can you design custom xsd": "Yes, we design custom XSD schemas for your project.",
    "do you provide automated validation": "Yes, we provide automated validation workflows.",
    "can you fix schema errors": "Yes, we identify and resolve schema-related errors.",
    "do you support rng schemas": "Yes, we support Relax NG schema validation.",
    "can you provide schema documentation": "Yes, we deliver documentation for schema usage.",
    "what is content digitization": "Content digitization converts physical or print-based materials into searchable digital formats.",
    "What content can you digitize?": "Books, journals, educational materials, technical documents, and legacy archives.",
    "can you digitize books": "Yes, we digitize books into XML and ePub formats.",
    "Do you provide OCR services?": "Yes, we use OCR along with manual quality checks to ensure high accuracy.",
    "do you digitize newspapers": "Yes, we digitize newspapers for archival and publishing.",
    "can you digitize journals": "Yes, we digitize academic journals with structured metadata.",
    "do you digitize legal documents": "Yes, we digitize legal documents with compliance tagging.",
    "can you digitize government records": "Yes, we digitize government records securely.",
    "do you digitize scientific papers": "Yes, we digitize scientific papers with precision tagging.",
    "can you digitize handwritten notes": "Yes, handwritten notes can be digitized with OCR and XML.",
    "How do you ensure data accuracy?": " We use automated validation, manual reviews, and multi-level quality checks.",
    "What is your accuracy rate?": "Yes, we follow strict data security and confidentiality practices.",
    "Do you provide revisions?": "Yes, revisions are provided based on project requirements.",
    "can you provide sample outputs": "Yes, we provide sample outputs for client review.",
    "do you provide version control": "Yes, we maintain version control for XML files.",
    "can you provide client reviews": "Yes, we share client feedback and case studies.",
    "How does your project process work?": "Requirement analysis → Data conversion → Quality validation → Secure delivery.",
    "can you handle bulk projects": "Yes, we handle bulk digitization and XML conversion projects.",
    "do you provide pilot projects": "Yes, we offer pilot projects before full-scale implementation.",
    "can you integrate with apis": "Yes, we integrate XML workflows with APIs.",
    "do you provide documentation": "Yes, we provide detailed documentation for processes.",
    "can you provide training manuals": "Yes, we deliver training manuals for XML workflows.",
    "do you provide maintenance": "Yes, we provide ongoing maintenance and updates." ,
    "Which industries do you serve?": "Publishing, Healthcare, Banking & Finance, Education, E-commerce, and Technology.",
    "Do you work with enterprise clients?": "Yes, we support both mid-scale and enterprise-level organizations.",
    "Is my data secure?": "Yes, we follow strict data security and confidentiality practices.",
    "Do you sign NDAs?": "Yes, NDAs can be signed upon request.",
    "how to conatct you": "you can contact at us at info@smartxmlsolutions or you can reach us via the contact page,",
    "can you help me choose the right service": "Yes, please tell us about your content type and requirements.",
    "i have a custom requirement": "No problem! Please contact us and our team will assist you.",
    "when do i recive my email": "the email will be sent to you shortly.",
    "Can you confirm if my email was delivered?": "Your email has been delivered to the recipient’s inbox.",
    "How long does it take to get an email?":"Emails are usually delivered instantly, but sometimes they may take a few minutes."
}
 

# Transform dictionary into a list of documents for Mongo
documents = [{"question": k.lower(), "answer": v} for k, v in faq_data.items()]

# Clear existing and insert new
querries_col.delete_many({}) 
querries_col.insert_many(documents)

print("Database seeded successfully!")