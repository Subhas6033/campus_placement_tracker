# 🎓 Campus Placement Tracker

A full-stack web application that helps students track campus placement opportunities and enables administrators to manage companies, placement drives, and student applications efficiently.

## 🚀 Features

### 👨‍🎓 Student Features

- 🔐 Secure Authentication (Register/Login)
- 🏢 Browse available companies
- 📄 View company details
- ✅ Apply for placement drives
- ❌ Mark companies as "Not Applied" with reason
- 📊 Track application status
- 🔍 Search and filter companies
- 📱 Responsive UI

### 👨‍💼 Admin Features

- Dashboard overview
- Add/Edit/Delete companies
- Create placement drives
- Manage student applications
- Update application status
- View placement statistics

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Axios
- React Hot Toast

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js
- Express Validator

---

# 📂 Project Structure

```
Campus-Placement-Tracker
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── Config/
│   ├── Controllers/
│   ├── Middleware/
│   ├── Models/
│   ├── Routes/
│   ├── Utils/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/yourusername/campus-placement-tracker.git

cd campus-placement-tracker
```

---

## 2. Install Dependencies

### Backend

```bash
cd server
npm install
```

### Frontend

```bash
cd client
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** directory.

```env
PORT=5000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_secret_key

NODE_ENV=development
```

---

# ▶️ Run the Application

## Start Backend

```bash
cd server

npm run dev
```

Runs on

```
http://localhost:5000
```

---

## Start Frontend

```bash
cd client

npm run dev
```

Runs on

```
http://localhost:5173
```

---

# 📦 API Endpoints

## Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |

---

## Companies

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | /api/company     | Get All Companies |
| GET    | /api/company/:id | Get Company       |
| POST   | /api/company     | Add Company       |
| PUT    | /api/company/:id | Update Company    |
| DELETE | /api/company/:id | Delete Company    |

---

## Applications

| Method | Endpoint             | Description        |
| ------ | -------------------- | ------------------ |
| POST   | /api/application     | Apply              |
| GET    | /api/application     | Get Applications   |
| PUT    | /api/application/:id | Update Status      |
| DELETE | /api/application/:id | Delete Application |

---

# 🗄 Database Models

### User

- Name
- Email
- Password
- Role

---

### Company

- Company Name
- Logo
- Website
- Industry
- Description
- Headquarters
- Founded Year

---

### Placement Drive

- Company
- Job Role
- Salary
- Eligibility
- Deadline

---

### Application

- Student
- Company
- Status
- Applied
- Not Applied Reason
- Interview Date

---

# 🔐 Authentication

- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-based Authorization

---

# 🎨 UI

- Fully Responsive
- Mobile Friendly
- Modern Dashboard
- Clean User Interface
- Tailwind CSS Components

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Subhas Mondal**

- GitHub: https://github.com/Subhas6033

---

⭐ If you found this project helpful, don't forget to give it a star!
