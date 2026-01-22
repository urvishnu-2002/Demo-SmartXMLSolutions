Smart XML Solutions – Full-Stack Web Application

A professional, production-ready web application for XML data conversion and processing services with a React + Vite frontend and a Python Flask backend using MongoDB (PyMongo) as a centralized database.

📋 Table of Contents

Project Structure

Quick Start
Prerequisites
Database Setup (MongoDB)
Backend Setup
Frontend Setup
Frontend Package Installation
API Endpoints
Website Pages
Features
Tech Stack
License


🏗️ Project Structure

DEMO-SMARTXMLSOLUTIONS/
│
├── Backend/ # Flask + MongoDB backend
│ ├── app.py # Main Flask application
│ ├── faqadd.py # FAQ / chatbot logic
│ ├── view_db.py # Database utilities
│ ├── templates/ # HTML templates (if any)
│ ├── requirements.txt # Python dependencies
│ └── .env # Environment variables
│
├── Frontend/ # React + Vite frontend
│ ├── src/
│ │ ├── api/
│ │ │ └── axiosInstance.js # Axios configuration
│ │ ├── assets/ # Images & static files
│ │ ├── Components/
│ │ │ ├── Home.jsx
│ │ │ ├── AboutUs.jsx
│ │ │ ├── Services.jsx
│ │ │ ├── Process.jsx
│ │ │ ├── Industries.jsx
│ │ │ ├── Contact.jsx
│ │ │ ├── Chatbot.jsx
│ │ │ ├── AccessibilityWidget.jsx
│ │ │ └── PageTransition.jsx
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ ├── index.css
│ │ └── App.css
│ │
│ ├── index.html
│ ├── package.json
│ ├── vite.config.js
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ ├── eslint.config.js
│ └── vercel.json
│
└── README.md

🚀 Quick Start
Prerequisites

Ensure the following are installed:

Python 3.8+

Node.js 16+

npm

MongoDB (Local or MongoDB Atlas)

🗄️ Database Setup (MongoDB)

This project uses MongoDB as a centralized database with PyMongo.

Option 1: Local MongoDB

Install MongoDB

Start MongoDB server:

mongod

Option 2: MongoDB Atlas (Recommended)

Create a free MongoDB Atlas cluster

Get your connection string

Example:

mongodb+srv://username:password@cluster.mongodb.net/smartxml

⚙️ Backend Setup
Install Backend Dependencies
cd Backend
pip install -r requirements.txt

Environment Configuration

Create a .env file inside the Backend folder:

FLASK_ENV=development
FLASK_APP=app.py
SECRET_KEY=your_secret_key
MONGO_URI=mongodb://localhost:27017/smartxml
CORS_ORIGINS=http://localhost:5173
API_PORT=5000

Start Backend Server
python app.py

Backend runs at:

http://localhost:5000

🎨 Frontend Setup
Install Frontend Dependencies
cd Frontend
npm install

Start Frontend Development Server
npm run dev

Frontend runs at:

http://localhost:5173

📦 Frontend Package Installation

The frontend uses Axios for API calls and React Router DOM (BrowserRouter) for client-side routing.

Install Axios
npm install axios

Install React Router DOM (BrowserRouter)
npm install react-router-dom

After installation, routing is handled using:

import { BrowserRouter } from "react-router-dom";

🔌 API Endpoints
✅ Public Endpoints (No Authentication Required)

Method Endpoint Description
-------------------------------------------------------------------

POST  |  /api/contact/save    |  Save user contact details
GET   |  /api/service/get     |  Fetch service/chart details
GET   |  /api/chatbot/suggest |  Get chatbot suggestions
POST  |  /api/chatbot         |  Submit chatbot user query

-------------------------------------------------------------------

🔒 Protected Endpoints (Admin Only)

Method Endpoint Description
-------------------------------------------------------------------

GET      |  /api/contacts/all          |  Get all user responses
PUT      |  /api/service/update        |  Update chart data
DELETE   |  /api/contact/delete/<id>   |  Delete user response

-------------------------------------------------------------------

📱 Website Pages

Home
About Us
Services
Process
Industries
Contact

Each page includes a common navbar (header) and footer.

✨ Features

Frontend

✅ React + Vite
✅ Tailwind CSS
✅ Axios API integration
✅ React Router DOM
✅ Chatbot integration
✅ Accessibility widget
✅ Page transitions
✅ Responsive UI

Backend

✅ Flask REST API
✅ MongoDB with PyMongo
✅ CORS enabled
✅ Input validation
✅ Modular architecture
✅ Centralized database

🛠️ Tech Stack

Frontend

React 18
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

MongoDB (Centralized NoSQL Database)

📄 License

MIT License — Free for personal and commercial use.


📞 Support

For issues, enhancements, or feature requests, please contact the development team or raise an issue in the repository.
