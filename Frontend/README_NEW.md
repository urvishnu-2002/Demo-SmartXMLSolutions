# Smart XML Solutions - Full-Stack Web Application

A professional, production-ready web application for XML data conversion and processing services with React frontend, Python Flask backend, and SQLite database.

---

## 📋 Table of Contents

- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Prerequisites](#prerequisites)
- [Database Setup](#database-setup)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#-api-endpoints)
- [Website Pages](#-website-pages)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [License](#-license)

---

## 🏗️ Project Structure

```
Smart-XML-Solutions/
├── frontend/                 # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── Components/       # Reusable React components
│   │   ├── assets/           # Images and static assets
│   │   ├── api/              # Axios API service layer
│   │   ├── App.jsx           # Main App component
│   │   ├── App.css           # App styles
│   │   ├── index.js          # React entry point
│   │   ├── main.jsx          # Vite entry point
│   │   └── index.css         # Global styles
│   ├── package.json          # Frontend dependencies
│   ├── vite.config.js        # Vite configuration
│   ├── tailwind.config.js    # Tailwind CSS configuration
│   └── index.html            # HTML template
│
└── backend/                  # Python Flask + SQLite
    ├── src/
    │   ├── config/           # Database configuration
    │   ├── controllers/      # Route controllers
    │   ├── routes/           # API routes
    │   ├── middleware/       # Authentication middleware
    │   ├── models/           # Database models
    │   └── app.py            # Flask application
    ├── database.db           # SQLite database
    ├── schema.sql            # Database schema
    ├── requirements.txt      # Python dependencies
    ├── .env                  # Environment variables
    └── config.py             # Application configuration
```

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed on your system:

**Required Software:**

- **Python** 3.8+
- **Node.js** v14+
- **npm** or **yarn**

**Python Packages (Auto-installed):**

- Flask
- Flask-CORS
- SQLite3 (built-in with Python)

**Frontend Packages (Auto-installed):**

- React 18+
- Axios
- React Router

---

## 1️⃣ Database Setup

SQLite is lightweight and comes with Python, so no separate database installation is needed.

### Create the Database

Navigate to the backend folder and initialize the database:

```bash
cd backend
python -c "import sqlite3; sqlite3.connect('database.db').close()"
```

**Expected Output:**

```
Database created successfully at: database.db
```

### Apply Schema

Run the SQL schema to create tables:

```bash
# On Windows (PowerShell)
sqlite3.exe database.db < schema.sql

# On macOS/Linux
sqlite3 database.db < schema.sql
```

Or run the SQL commands directly in Python:

```python
import sqlite3

conn = sqlite3.connect('database.db')
cursor = conn.cursor()

with open('schema.sql', 'r') as f:
    cursor.executescript(f.read())

conn.commit()
conn.close()
print("Database schema applied successfully!")
```

**Expected Output:**

```
Database schema applied successfully!
```

---

## 2️⃣ Backend Setup (Python Flask)

### Install Dependencies

```bash
cd backend

# Install Python dependencies
pip install -r requirements.txt
```

**Expected Output:**

```
Successfully installed Flask-2.3.0 Flask-CORS-4.0.0 python-dotenv-1.0.0
Collecting packages...
Successfully installed 3 packages
```

### Configure Environment Variables

Create a `.env` file in the backend folder:

```env
# .env
FLASK_ENV=development
FLASK_APP=app.py
DATABASE_URL=sqlite:///database.db
SECRET_KEY=your_secret_key_here
API_PORT=5000
CORS_ORIGINS=http://localhost:5173
```

### Start Development Server

```bash
python app.py
```

or

```bash
flask run
```

**Expected Output:**

```
 * Serving Flask app 'app.py'
 * Debug mode: on
 * Running on http://127.0.0.1:5000
 * Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 123-456-789
```

Backend runs on: `http://localhost:5000`

---

## 3️⃣ Frontend Setup (React + Vite)

### Install Dependencies

```bash
cd frontend

# Install npm dependencies
npm install
```

**Expected Output:**

```
added 125 packages, and audited 125 packages in 2m
found 0 vulnerabilities
up to date, audited 125 packages
```

### Start Development Server

```bash
npm run dev
```

**Expected Output:**

```
  VITE v4.5.0  ready in 542 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

Frontend runs on: `http://localhost:5173`

---

## 🔐 Default Login Credentials

Smart XML Solutions uses simple authentication for admin access.

**Default Admin Credentials:**

- **Username:** admin
- **Password:** admin123

⚠️ **IMPORTANT:** Change these credentials in production!

---

## 🔌 API Endpoints

### Public Endpoints (No Authentication Required)

| Method | Endpoint            | Description                  |
| ------ | ------------------- | ---------------------------- |
| POST   | `/api/contact/save` | to save the user response    |
| GET    | `/api/service/get`  | to display the chart details |

### Protected Endpoints (Admin Only)

| Method | Endpoint                               | Description                   |
| ------ | -------------------------------------- | ----------------------------- |
| GET    | `/api/contacts/all`                    | to get all the user responses |
| PUT    | `/api/service/update`                  | Update chart                  |
| DELETE | `/api/contact/delete/<int:contact_id>` | Delete user response          |

---

## 📱 Website Pages

### 7.1 Home Page

The Home Page serves as the primary entry point and provides a high-level introduction to Smart XML Solutions.

**Sections:**

- Header & Navigation Bar
- Professional banner highlighting XML expertise
- Brief company introduction
- Overview of core services
- Why choose Smart XML Solutions?
- Industries served
- Call-to-action for client inquiries
- Contact info footer

### 7.2 About Us Page

Provides background information and establishes credibility with visitors.

**Sections:**

- Header & Navigation Bar
- Company overview
- Vision and mission statements
- Core values
- Technical expertise
- Commitment to quality
- Services chart
- Contact info footer

### 7.3 Services Page

Explains key offerings in a clear and structured manner.

**Sections:**

- Header & Navigation Bar
- XML conversion services
- XML tagging and structuring
- DTD / XSD validation
- Content digitization
- Data quality and validation services
- Contact info footer

### 7.4 Process Workflow Page

Outlines the step-by-step process for handling client projects.

**Sections:**

- Header & Navigation Bar
- Requirement analysis
- Data conversion and processing
- Quality checks
- Client delivery
- Quality Guarantees
- Contact info footer

### 7.5 Industries Served Page

Highlights domains where Smart XML Solutions provides services.

**Sections:**

- Header & Navigation Bar
- Publishing
- Banking and Finance
- Healthcare
- Education
- E-commerce
- Contact info footer

### 7.6 Contact Us Page

Allows users to easily connect with Smart XML Solutions for business inquiries.

**Sections:**

- Header & Navigation Bar
- Contact form
- Email and phone details
- Office address

---

## 🎨 Features

### Frontend Features

✅ Responsive design (mobile-first)
✅ Tailwind CSS styling
✅ React Router for navigation
✅ Axios for API requests
✅ Dynamic component rendering
✅ Form validation
✅ Smooth page transitions
✅ Professional UI/UX

### Backend Features

✅ RESTful API architecture
✅ SQLite database integration
✅ Input validation and sanitization
✅ CORS enabled
✅ Error handling
✅ Session management
✅ Database ORM with SQLAlchemy
✅ Environment configuration

---

## 🛠️ Tech Stack

### Frontend

| Technology   | Version | Purpose             |
| ------------ | ------- | ------------------- |
| React        | 18+     | UI library          |
| Vite         | 4+      | Build tool          |
| Tailwind CSS | 3+      | Styling framework   |
| Axios        | Latest  | HTTP client         |
| React Router | 6+      | Client-side routing |

### Backend

| Technology    | Version  | Purpose                |
| ------------- | -------- | ---------------------- |
| Python        | 3.8+     | Programming language   |
| Flask         | Latest   | Web framework          |
| Flask-CORS    | Latest   | Cross-origin support   |
| SQLite        | Built-in | Database               |
| python-dotenv | Latest   | Environment management |

### Database

| Technology | Version  | Purpose                         |
| ---------- | -------- | ------------------------------- |
| SQLite     | Built-in | Lightweight relational database |

---

## 📄 License

MIT License - Free for personal and commercial use.

---

## 📞 Support

For issues, feature requests, or questions, please open an issue in the repository or contact the development team.
