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
| GET    | `/api/services`     | List all XML services        |
| GET    | `/api/industries`   | List industries served       |
| POST   | `/api/contact`      | Submit contact form          |
| POST   | `/api/applications` | Submit service request       |
| GET    | `/api/process`      | Get process workflow details |

### Protected Endpoints (Admin Only)

| Method | Endpoint                      | Description                |
| ------ | ----------------------------- | -------------------------- |
| GET    | `/api/admin/contact`          | List all contact inquiries |
| PATCH  | `/api/admin/contact/:id`      | Update contact status      |
| GET    | `/api/admin/applications`     | List service applications  |
| PATCH  | `/api/admin/applications/:id` | Update application status  |
| POST   | `/api/admin/services`         | Create new service         |
| PUT    | `/api/admin/services/:id`     | Update service             |
| DELETE | `/api/admin/services/:id`     | Delete service             |

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

<!-- [![Abblix OIDC Server](https://resources.abblix.com/imgs/jpg/abblix-oidc-server-github-banner.jpg)](https://www.abblix.com/abblix-oidc-server)
[![.NET](https://img.shields.io/badge/.NET-8.0%2C%209.0%2C%2010.0-512BD4)](https://docs.abblix.com/docs/technical-requirements)
[![language](https://img.shields.io/badge/language-C%23-239120)](https://learn.microsoft.com/ru-ru/dotnet/csharp/tour-of-csharp/overview)
[![OS](https://img.shields.io/badge/OS-linux%2C%20windows%2C%20macOS-0078D4)](https://docs.abblix.com/docs/technical-requirements)
[![CPU](https://img.shields.io/badge/CPU-x86%2C%20x64%2C%20ARM%2C%20ARM64-FF8C00)](https://docs.abblix.com/docs/technical-requirements)
[![security rating](https://sonarcloud.io/api/project_badges/measure?project=Abblix_Oidc.Server&metric=security_rating)](https://sonarcloud.io/summary/overall?id=Abblix_Oidc.Server)
[![reliability rating](https://sonarcloud.io/api/project_badges/measure?project=Abblix_Oidc.Server&metric=reliability_rating)](https://sonarcloud.io/summary/overall?id=Abblix_Oidc.Server)
[![maintainability rating](https://sonarcloud.io/api/project_badges/measure?project=Abblix_Oidc.Server&metric=sqale_rating)](https://sonarcloud.io/summary/overall?id=Abblix_Oidc.Server)
[![CodeQL analysis](https://github.com/Abblix/Oidc.Server/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/Abblix/Oidc.Server/security/code-scanning?query=is%3Aopen)
[![tests](https://img.shields.io/badge/tests-2000+%20passing-brightgreen)](https://github.com/Abblix/Oidc.Server/tree/master/Abblix.Oidc.Server.UnitTests)
[![GitHub release](https://img.shields.io/github/v/release/Abblix/Oidc.Server)](#)
[![GitHub release date](https://img.shields.io/github/release-date/Abblix/Oidc.Server)](#)
[![GitHub last commit](https://img.shields.io/github/last-commit/Abblix/Oidc.Server)](#)
[![getting started](https://img.shields.io/badge/getting_started-guide-1D76DB)](https://docs.abblix.com/docs/getting-started-guide)
[![Free](https://img.shields.io/badge/free_for_non_commercial_use-brightgreen)](#-license) -->

⭐ Star us on GitHub — your support motivates us a lot! 🙏😊

[![Share](https://img.shields.io/badge/share-000000?logo=x&logoColor=white)](https://x.com/intent/tweet?text=Check%20out%20this%20project%20on%20GitHub:%20https://github.com/Abblix/Oidc.Server%20%23OpenIDConnect%20%23Security%20%23Authentication)
[![Share](https://img.shields.io/badge/share-1877F2?logo=facebook&logoColor=white)](https://www.facebook.com/sharer/sharer.php?u=https://github.com/Abblix/Oidc.Server)
[![Share](https://img.shields.io/badge/share-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/Abblix/Oidc.Server)
[![Share](https://img.shields.io/badge/share-FF4500?logo=reddit&logoColor=white)](https://www.reddit.com/submit?title=Check%20out%20this%20project%20on%20GitHub:%20https://github.com/Abblix/Oidc.Server)
[![Share](https://img.shields.io/badge/share-0088CC?logo=telegram&logoColor=white)](https://t.me/share/url?url=https://github.com/Abblix/Oidc.Server&text=Check%20out%20this%20project%20on%20GitHub)

## Table of Contents

- [introduction](#-introduction)
- [projectObjectives](#-Project Objectives)
- [targerAudience](#-Target Audience)
- [How to Build](#-how-to-build)
- [Documentation](#-documentation)
- [Feedback and Contributions](#-feedback-and-contributions)
- [Contacts](#%EF%B8%8F-contacts)

## 🚀 About

**Smart XML Solutions** is a .NET library designed to provide comprehensive support for OAuth2 and OpenID Connect on the server side. It adheres to high standards of flexibility, reusability, and reliability, utilizing well-known software design patterns, including modular and hexagonal architectures. These patterns ensure the following benefits:

- **Modularity**: Different parts of the library can function independently, enhancing the library's modularity and allowing for easier maintenance and updates.
- **Testability**: Improved separation of concerns makes the code more testable.
- **Maintainability**: Clear structure and separation facilitate better management of the codebase.

The library also supports Dependency Injection through the standard .NET DI container, aiding in the organization and management of code. Specifically tailored for seamless integration with ASP.NET WebApi, Abblix OIDC Server employs standard controller classes, binding, and routing mechanisms, simplifying the integration of OpenID Connect into your services.

## ✨ What's New

### Version 2.0.0 (Latest)

⚡ **Breaking Changes**

- **Result Pattern Migration**: Migrated to `Result<TSuccess, TFailure>` pattern for compiler-enforced explicit error handling and functional programming style
- **Framework Updates**: Dropped .NET 6 & 7 (EOL) - now targets .NET 8 (LTS), .NET 9 (STS), and .NET 10 (LTS - released Nov 2025, supported until Nov 2028)

🚀 **Features**

- **mTLS Client Authentication (RFC 8705)**: Self-signed and PKI/CA validation with certificate-bound tokens
- **JWT Bearer Grant Type (RFC 7523)**: Service-to-service authentication using signed JWTs for secure API-to-API communication
- **Device Authorization Grant (RFC 8628)**: OAuth flow for input-constrained devices (smart TVs, IoT, CLI tools)
- **CIBA Ping/Push Modes & Long-Polling**: Complete delivery mode implementation with ping notifications, push token delivery, and long-polling support
- **client_secret_jwt Authentication**: JWT-based client authentication per OIDC Core spec
- **SSRF Protection**: Multi-layered defense with DNS validation and IP blocking
- **Protocol Buffer Serialization**: 40-60% smaller storage footprint with faster processing
- **ECDSA Certificate Support**: Enables compliance with modern security standards that mandate or prefer elliptic curve cryptography

> **Migration Note**: This release contains breaking changes. See 📋[Migration Guide](MIGRATION-2.0.md).

## 📝 How to Build

To build the packages, follow these steps:

```shell
# Open a terminal (Command Prompt or PowerShell for Windows, Terminal for macOS or Linux)

# Ensure Git is installed
# Visit https://git-scm.com to download and install console Git if not already installed

# Clone the repository
git clone https://github.com/Abblix/Oidc.Server.git

# Navigate to the project directory
cd Oidc.Server

# Check if .NET SDK is installed
dotnet --version  # Check the installed version of .NET SDK
# Visit the official Microsoft website to install or update it if necessary

# Restore dependencies
dotnet restore

# Compile the project
dotnet build

```

## 📚 Documentation

### Getting Started

Explore the [Getting Started Guide](https://docs.abblix.com/docs/getting-started-guide).
In this guide, you will create a working solution step by step, building an OpenID Connect Provider using ASP.NET MVC and the Abblix OIDC Server solution.

To better understand the Abblix OIDC Server product, we recommend visiting our [Documentation](https://docs.abblix.com/docs) site. There, you will find useful information about the product and the OpenID Connect standard.

## 🤝 Feedback and Contributions

We've made every effort to implement all the main aspects of the OpenID protocol in the best possible way. However, the development journey doesn't end here, and your input is crucial for our continuous improvement.

> [!IMPORTANT]
> Whether you have feedback on features, have encountered any bugs, or have suggestions for enhancements, we're eager to hear from you. Your insights help us make the Abblix OIDC Server library more robust and user-friendly.

Please feel free to contribute by [submitting an issue](https://github.com/Abblix/Oidc.Server/issues) or [joining the discussions](https://github.com/orgs/Abblix/discussions). Each contribution helps us grow and improve.

We appreciate your support and look forward to making our product even better with your help!

## 📃 License

This product is distributed under a proprietary license. See📋[License Agreement](LICENSE.md) for details.

For non-commercial use, this product is available for free.

## 🗨️ Contacts

For more details about our products, services, or any general information regarding the Abblix OIDC Server, feel free to reach out to us. We are here to provide support and answer any questions you may have. Below are the best ways to contact our team:

- **Email**: Send us your inquiries or support requests at [support@abblix.com](mailto:support@abblix.com).
- **Website**: Visit the official Abblix OIDC Server page for more information: [Abblix OIDC Server](https://www.abblix.com/abblix-oidc-server).

Subscribe to our LinkedIn and Twitter:

[![LinkedIn](https://img.shields.io/badge/subscribe-white.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjQ0NyAyMC40NTJoLTMuNTU0di01LjU2OWMwLTEuMzI4LS4wMjctMy4wMzctMS44NTItMy4wMzctMS44NTMgMC0yLjEzNiAxLjQ0NS0yLjEzNiAyLjkzOXY1LjY2N0g5LjM1MVY5aDMuNDE0djEuNTYxaC4wNDZjLjQ3Ny0uOSAxLjYzNy0xLjg1IDMuMzctMS44NSAzLjYwMSAwIDQuMjY3IDIuMzcgNC4yNjcgNS40NTV2Ni4yODZ6TTUuMzM3IDcuNDMzYTIuMDYyIDIuMDYyIDAgMCAxLTIuMDYzLTIuMDY1IDIuMDY0IDIuMDY0IDAgMSAxIDIuMDYzIDIuMDY1em0xLjc4MiAxMy4wMTlIMy41NTVWOWgzLjU2NHYxMS40NTJ6TTIyLjIyNSAwSDEuNzcxQy43OTIgMCAwIC43NzQgMCAxLjcyOXYyMC41NDJDMCAyMy4yMjcuNzkyIDI0IDEuNzcxIDI0aDIwLjQ1MUMyMy4yIDI0IDI0IDIzLjIyNyAyNCAyMi4yNzFWMS43MjlDMjQgLjc3NCAyMy4yIDAgMjIuMjIyIDBoLjAwM3oiIGZpbGw9IiMwQTY2QzIiLz48cGF0aCBzdHlsZT0iZmlsbDojZmZmO3N0cm9rZS13aWR0aDouMDIwOTI0MSIgZD0iTTQuOTE3IDcuMzc3YTIuMDUyIDIuMDUyIDAgMCAxLS4yNC0zLjk0OWMxLjEyNS0uMzg0IDIuMzM5LjI3NCAyLjY1IDEuNDM3LjA2OC4yNS4wNjguNzY3LjAwMSAxLjAxYTIuMDg5IDIuMDg5IDAgMCAxLTEuNjIgMS41MSAyLjMzNCAyLjMzNCAwIDAgMS0uNzktLjAwOHoiLz48cGF0aCBzdHlsZT0iZmlsbDojZmZmO3N0cm9rZS13aWR0aDouMDIwOTI0MSIgZD0iTTQuOTE3IDcuMzc3YTIuMDU2IDIuMDU2IDAgMCAxLTEuNTItMi42NyAyLjA0NyAyLjA0NyAwIDAgMSAzLjQxOS0uNzU2Yy4yNC4yNTQuNDIuNTczLjUxMi45MDguMDY1LjI0LjA2NS43OCAwIDEuMDItLjA1MS4xODYtLjE5Ny41MDQtLjMuNjUyLS4wOS4xMzItLjMxLjM2Mi0uNDQzLjQ2NC0uNDYzLjM1Ny0xLjEuNTAzLTEuNjY4LjM4MlpNMy41NTcgMTQuNzJWOS4wMDhoMy41NTd2MTEuNDI0SDMuNTU3Wk05LjM1MyAxNC43MlY5LjAwOGgzLjQxMXYuNzg1YzAgLjYxNC4wMDUuNzg0LjAyNi43ODMuMDE0IDAgLjA3LS4wNzMuMTI0LS4xNjIuNTI0LS44NjUgMS41MDgtMS40NzggMi42NS0xLjY1LjI3NS0uMDQyIDEtLjA0NyAxLjMzMi0uMDA5Ljc5LjA5IDEuNDUxLjMxNiAxLjk0LjY2NC4yMi4xNTcuNTU3LjQ5My43MTQuNzEzLjQyLjU5Mi42OSAxLjQxMi44MDggMi40NjQuMDc0LjY2My4wODQgMS4yMTUuMDg1IDQuNTc4djMuMjU4aC0zLjUzNnYtMi45ODZjMC0yLjk3LS4wMS0zLjQ3NC0uMDc0LTMuOTA4LS4wOS0uNjA2LS4zMTQtMS4wODItLjYzNC0xLjM0Mi0uMzk1LS4zMjItMS4wMjktLjQzNy0xLjcwMy0uMzA5LS44NTguMTYzLTEuMzU1Ljc1LTEuNTIzIDEuNzk3LS4wNzYuNDcxLS4wODQuODQ1LS4wODQgMy44MzR2Mi45MTRIOS4zNTN6Ii8+PC9zdmc+)](https://www.linkedin.com/company/103540510/)
[![X](https://img.shields.io/badge/subscribe-white.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4LjkwMSAxLjE1M2gzLjY4bC04LjA0IDkuMTlMMjQgMjIuODQ2aC03LjQwNmwtNS44LTcuNTg0LTYuNjM4IDcuNTg0SC40NzRsOC42LTkuODNMMCAxLjE1NGg3LjU5NGw1LjI0MyA2LjkzMlpNMTcuNjEgMjAuNjQ0aDIuMDM5TDYuNDg2IDMuMjRINC4yOThaIi8+PHBhdGggc3R5bGU9ImZpbGw6I2ZmZjtzdHJva2Utd2lkdGg6LjAyMDkyNDEiIGQ9Ik0xMS4wMzYgMTIuMDI4IDQuMzg3IDMuMzM0bC0uMDYtLjA4SDYuNDhsNi41MTYgOC42MTQgNi41NzUgOC42OTQuMDYuMDhoLTIuMDA2eiIvPjwvc3ZnPg==)](https://twitter.com/OIDCServer)

We look forward to assisting you and ensuring your experience with our products is successful and enjoyable!

[Back to top](#top)
