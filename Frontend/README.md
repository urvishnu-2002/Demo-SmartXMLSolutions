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
- [Running Both Servers](#-running-both-servers)
- [API Endpoints](#-api-endpoints)
- [Website Pages](#-website-pages)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Testing](#-testing)
- [Troubleshooting](#-troubleshooting)
- [Production Deployment](#-production-deployment)
- [Contributing](#-contributing)
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

## 4️⃣ Frontend Environment Variables

Create a `.env` file in the frontend folder for API configuration:

```env
# .env (Frontend)
VITE_API_BASE_URL=http://localhost:5000
VITE_API_TIMEOUT=10000
```

### Environment Variable Reference

| Variable          | Description              | Default Value         |
| ----------------- | ------------------------ | --------------------- |
| VITE_API_BASE_URL | Backend API base URL     | http://localhost:5000 |
| VITE_API_TIMEOUT  | API request timeout (ms) | 10000                 |

---

## 5️⃣ Running Both Servers

### Option 1: Run Servers in Separate Terminals (Recommended for Development)

**Terminal 1 - Backend:**

```bash
cd backend
python app.py
```

**Terminal 2 - Frontend:**

```bash
cd frontend
npm run dev
```

### Option 2: Concurrent Execution (Windows PowerShell)

```powershell
# Start both servers concurrently
Start-Process -NoNewWindow -FilePath "python" -ArgumentList "backend/app.py"
Start-Process -NoNewWindow -FilePath "npm" -ArgumentList "run dev" -WorkingDirectory "frontend"
```

### Option 3: Using npm-run-all (Global Installation Required)

First, install concurrently globally:

```bash
npm install -g concurrently
```

Then from the root directory:

```bash
concurrently "cd backend && python app.py" "cd frontend && npm run dev"
```

**Both Servers Ready:**

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

---

Smart XML Solutions uses simple authentication for admin access.

**Default Admin Credentials:**

- **Username:** admin
- **Password:** password123

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

## 🧪 Testing

### Frontend Testing

#### Run Unit Tests

```bash
cd frontend
npm run test
```

#### Run E2E Tests

```bash
cd frontend
npm run test:e2e
```

#### Build for Testing

```bash
cd frontend
npm run build
npm run preview
```

### Backend Testing

#### Run Backend Unit Tests

```bash
cd backend
pip install pytest pytest-cov
pytest
```

#### Generate Coverage Report

```bash
cd backend
pytest --cov=. --cov-report=html
```

#### Test API Endpoints Manually

Use **Postman** or **cURL** to test endpoints:

```bash
# Test public endpoint
curl -X GET http://localhost:5000/api/service/get

# Test contact save
curl -X POST http://localhost:5000/api/contact/save \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com"}'
```

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### 1. **Port Already in Use**

**Error:** `Address already in use: 127.0.0.1:5000` or `EADDRINUSE :::5173`

**Solution:**

```bash
# Find and kill process using port 5000 (Backend)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or change the port in Flask app
python app.py --port 5001
```

#### 2. **Module Not Found Error (Python)**

**Error:** `ModuleNotFoundError: No module named 'flask'`

**Solution:**

```bash
cd backend
pip install -r requirements.txt --upgrade
```

#### 3. **CORS Error**

**Error:** `Access to XMLHttpRequest blocked by CORS policy`

**Solution:** Ensure Flask-CORS is installed and configured:

```bash
pip install Flask-CORS
```

Update `app.py`:

```python
from flask_cors import CORS
CORS(app, resources={r"/api/*": {"origins": "*"}})
```

#### 4. **Database Connection Error**

**Error:** `sqlite3.OperationalError: unable to open database file`

**Solution:**

```bash
cd backend
python -c "import sqlite3; sqlite3.connect('database.db').close()"
```

#### 5. **NPM Dependency Issues**

**Error:** `npm ERR! peer dep missing`

**Solution:**

```bash
cd frontend
npm install
npm install --legacy-peer-deps
```

#### 6. **Frontend Cannot Connect to Backend**

**Error:** Network errors in browser console

**Solution:**

- Verify backend is running on `http://localhost:5000`
- Check CORS configuration in backend
- Verify `.env` file has correct `VITE_API_BASE_URL`
- Clear browser cache (Ctrl+Shift+Delete)

#### 7. **Hot Reload Not Working**

**Solution:**

```bash
cd frontend
# Kill the dev server
npm run dev
```

---

## 🚀 Production Deployment

### Backend Deployment (Python Flask)

#### Using Gunicorn

```bash
cd backend
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

#### Using Docker

Create `Dockerfile` in backend:

```dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
EXPOSE 5000

CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:app"]
```

Build and run:

```bash
docker build -t smart-xml-backend .
docker run -p 5000:5000 smart-xml-backend
```

### Frontend Deployment (React + Vite)

#### Build for Production

```bash
cd frontend
npm run build
```

This creates an optimized production build in the `dist/` folder.

#### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

#### Deploy to Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

#### Using Docker

Create `Dockerfile` in frontend:

```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:

```bash
docker build -t smart-xml-frontend .
docker run -p 80:80 smart-xml-frontend
```

### Database Backup & Restore

#### Backup SQLite Database

```bash
# Windows
copy backend\database.db backend\database.backup.db

# macOS/Linux
cp backend/database.db backend/database.backup.db
```

#### Restore from Backup

```bash
# Windows
copy backend\database.backup.db backend\database.db

# macOS/Linux
cp backend/database.backup.db backend/database.db
```

### Environment Variables for Production

Update `.env` files:

**Backend:**

```env
FLASK_ENV=production
FLASK_APP=app.py
DATABASE_URL=sqlite:///database.db
SECRET_KEY=your_production_secret_key_here
API_PORT=5000
CORS_ORIGINS=https://yourdomain.com
```

**Frontend:**

```env
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_API_TIMEOUT=15000
```

---

## 📖 Contributing

We welcome contributions to Smart XML Solutions! Here's how to get started:

### Development Workflow

1. **Fork the Repository**

   ```bash
   git clone https://github.com/yourusername/Smart-XML-Solutions.git
   cd Smart-XML-Solutions
   ```

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes & Commit**

   ```bash
   git add .
   git commit -m "Add: description of your changes"
   ```

4. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**

   Open a pull request on GitHub with a clear description of changes.

### Code Style Guidelines

- **Python:** Follow PEP 8 standards
- **JavaScript:** Use ESLint configuration provided
- **CSS:** Use Tailwind CSS utilities
- **Comments:** Add meaningful comments for complex logic

### Before Submitting a PR

- [ ] Code follows project style guidelines
- [ ] All tests pass (`npm test`, `pytest`)
- [ ] No console errors or warnings
- [ ] Environment variables documented
- [ ] Database migrations applied (if needed)
- [ ] README updated (if needed)

### Reporting Issues

When reporting bugs, please include:

- Clear description of the issue
- Steps to reproduce
- Expected vs. actual behavior
- Screenshots/error logs if applicable
- Environment details (OS, Python version, Node version)

---

MIT License - Free for personal and commercial use.

---

## 📞 Support

For issues, feature requests, or questions, please open an issue in the repository or contact the development team.
