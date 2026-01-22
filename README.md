# Smart XML Solutions – Full-Stack Web Application

A professional, production-ready web application for XML data conversion and processing services with a **React + Vite frontend** and a **Python Flask backend** using **MongoDB (PyMongo)** as a centralized database.

---

## 📋 Table of Contents

- Project Structure
- Quick Start
- Prerequisites
- Database Setup (MongoDB)
- Backend Setup
- Frontend Setup
- Frontend Package Installation
- API Endpoints
- Website Pages
- Features
- Tech Stack
- License

---

## 🏗️ Project Structure

```text
DEMO-SMARTXMLSOLUTIONS
│
├── Backend
│   ├── app.py
│   ├── faqadd.py
│   ├── view_db.py
│   ├── templates/
│   ├── requirements.txt
│   └── .env
│
├── Frontend
│   ├── src
│   │   ├── api
│   │   │   └── axiosInstance.js
│   │   ├── assets
│   │   ├── Components
│   │   │   ├── Home.jsx
│   │   │   ├── AboutUs.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Process.jsx
│   │   │   ├── Industries.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Chatbot.jsx
│   │   │   ├── AccessibilityWidget.jsx
│   │   │   └── PageTransition.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── App.css
│   │
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── eslint.config.js
│   └── vercel.json
│
└── README.md

🚀 Quick Start

Prerequisites

Make sure you have the following installed:

Python 3.8+
Node.js 16+
npm

MongoDB (Local or MongoDB Atlas)

🗄️ Database Setup (MongoDB)
This project uses MongoDB with PyMongo as a centralized database.

Option 1: Local MongoDB
Start MongoDB server:
bash
Copy code
mongod

Option 2: MongoDB Atlas (Recommended)
Create a MongoDB Atlas cluster and copy the connection string.

Example:

text
Copy code
mongodb+srv://username:password@cluster.mongodb.net/smartxml

⚙️ Backend Setup
Install Backend Dependencies
bash
Copy code
cd Backend
pip install -r requirements.txt
Environment Variables
Create a .env file inside the Backend folder:

env
Copy code
FLASK_ENV=development
FLASK_APP=app.py
SECRET_KEY=your_secret_key
MONGO_URI=mongodb://localhost:27017/smartxml
CORS_ORIGINS=http://localhost:5173
API_PORT=5000
Run Backend Server
bash
Copy code
python app.py
Backend URL:

text
Copy code
http://localhost:5000

🎨 Frontend Setup
Install Frontend Dependencies
bash
Copy code
cd Frontend
npm install
Start Frontend Server
bash
Copy code
npm run dev
Frontend URL:

text
Copy code
http://localhost:5173

📦 Frontend Package Installation
Install Axios
bash
Copy code
npm install axios
Install React Router DOM (BrowserRouter)
bash
Copy code
npm install react-router-dom
Usage example:

js
Copy code
import { BrowserRouter } from "react-router-dom";

🔌 API Endpoints
Public Endpoints (No Authentication Required)
---------------------------------------------------------------
Method	   Endpoint	                Description

POST	      /api/contact/save	       Save user contact details
GET	      /api/service/get	       Fetch service/chart data
GET	      /api/chatbot/suggest	    Get chatbot suggestions
POST	      /api/chatbot	          Submit chatbot message

---------------------------------------------------------------

Protected Endpoints (Admin Only)

---------------------------------------------------------------
Method	     Endpoint	                    Description

GET	        /api/contacts/all	           Get all contacts
PUT	        /api/service/update	        Update service chart
DELETE	     /api/contact/delete/<id>	     Delete contact
---------------------------------------------------------------

📱 Website Pages
Home

About Us

Services

Process

Industries

Contact

All pages share a common header (navbar) and footer.

✨ Features

Frontend

React + Vite

Tailwind CSS

Axios API integration

React Router DOM

Chatbot

Accessibility widget

Page transitions

Responsive UI

Backend

Flask REST API

MongoDB (PyMongo)

Flask-CORS

Centralized database

Modular code structure

🛠️ Tech Stack

Frontend
React

Vite

Tailwind CSS

Axios

React Router DOM

Backend
Python

Flask

Flask-CORS

PyMongo

Database
MongoDB (NoSQL)

📄 License
MIT License – Free for personal and commercial use.

📞 Support
For issues or feature requests, please contact the development team or open an issue in the repository.

Just say the word 👍
