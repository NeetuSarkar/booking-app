# 🎟️ Activity Booking App - Backend API

A RESTful backend API for booking activities (like cricket, movies, football matches, etc.) — developed as part of the Backend Developer Internship assignment at **MeetX**.

---

## 🧠 Features

- 🔐 JWT-based Authentication (Login & Register)
- 📝 CRUD for Activities
- 📌 Authenticated Activity Booking
- 📄 View Personal Bookings
- ✅ Input validation using `express-validator`
- 🔒 Password encryption with `bcrypt`
- 🗂️ Modular MVC folder structure

---

## 🛠 Tech Stack

- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **Authentication**: JWT
- **Validation**: express-validator
- **Security**: bcrypt
- **Testing**: Postman

---

## 📁 Folder Structure

booking-app/
└── backend/
├── config/
│ └── db.js # MongoDB connection
├── controllers/
│ ├── activityControllers.js
│ ├── authControllers.js
│ └── bookingControllers.js
├── middlewares/
│ ├── authMiddleware.js
│ └── authValidator.js
├── models/
│ ├── Activity.js
│ ├── Booking.js
│ └── User.js
├── routes/
│ ├── activityRoutes.js
│ ├── authRoutes.js
│ └── bookingRoutes.js
├── .env
├── package.json
└── server.js



---

## 🚀 API Endpoints

### 👤 Auth

- `POST /api/register` → Register new user  
- `POST /api/login` → Login and get token  

### 🎯 Activities

- `GET /api/activities` → Public list of all activities  
- `POST /api/activities` → (Optional, for admin to add new activities)

### 📅 Bookings (Auth Required)

- `POST /api/book/:activityId` → Book an activity  
- `GET /api/my-bookings` → Get all activities booked by the user  

---

## 🔐 Authentication

All protected routes require a **Bearer Token** in the header:

