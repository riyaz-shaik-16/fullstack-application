# 🏡Full Stack Web Application

A full-stack web application with a **public landing page** and an **admin panel** to manage projects, clients, contacts, and newsletter subscribers. The system is fully dynamic, cloud-deployed, and production-ready.


## 🚀 Live Demo

- **Frontend (Landing Page):** [https://realtrustsite.vercel.app](https://realtrustsite.vercel.app)
- **Admin Panel:** [https://realtrustsite.vercel.app/admin](https://realtrustsite.vercel.app/admin)
- **Backend API:** [https://fullstack-application-osdu.onrender.com/](https://fullstack-application-osdu.onrender.com/)

---

## 📸 Screenshots

### Landing Page
![alt text](image.png)

### Admin Dashboard
![alt text](image-1.png)
---

## ✨ Features

### 🌐 Landing Page
- ✅ **Hero Section** with working contact form
- ✅ **Dynamic Projects Section** - Fetched from database
- ✅ **Dynamic Happy Clients Section** - Testimonials management
- ✅ **Newsletter Subscription** - Email collection with validation
- ✅ **Smooth Scroll Navigation** - Enhanced UX
- ✅ **Fully Responsive Design** - Mobile, tablet, desktop optimized

### 🧑‍💼 Admin Panel
- ✅ **Dashboard Layout** with sidebar
- ✅ **Project Management** - Add, view, and manage projects with images
- ✅ **Client Management** - Add and display happy clients
- ✅ **Contact Form Submissions** - View all inquiries
- ✅ **Newsletter Subscribers** - Manage email subscriptions
- ✅ **Responsive Sidebar** - Mobile-friendly navigation
- ✅ **Loading & Error States** - Professional UX handling

### ⚙️ Backend
- ✅ **RESTful API Architecture**
- ✅ **Centralized Error Handling**
- ✅ **Image Validation & Processing** - Automatic cropping and optimization
- ✅ **Clean MVC Architecture**
- ✅ **Cloud-based Image Storage** - Cloudinary integration
- ✅ **Stateless Design** - Optimized for scaling

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React (Vite)** | Fast, modern UI framework |
| **Tailwind CSS** | Utility-first styling |
| **React Router DOM** | Client-side routing |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | ODM for MongoDB |
| **Multer** | File upload handling |
| **Sharp** | Image processing |
| **Cloudinary** | Cloud image storage |

### Deployment
| Platform | Service |
|----------|---------|
| **Vercel** | Frontend hosting |
| **Render** | Backend hosting |
| **MongoDB Atlas** | Database hosting |

---

## 🔗 API Endpoints

### Projects
```http
GET    /api/projects          # Fetch all projects
POST   /api/projects          # Create a project (with image upload)
```

### Clients
```http
GET    /api/clients           # Fetch all clients
POST   /api/clients           # Create a client (with image upload)
```

### Contacts
```http
GET    /api/contacts          # Fetch all contact submissions
POST   /api/contacts          # Submit contact form
```

### Subscribers
```http
GET    /api/subscribers       # Fetch all newsletter subscribers
POST   /api/subscribers       # Subscribe to newsletter
```

---

## 🖼 Image Upload Flow

```
Client Upload (Form)
        ↓
Multer (memoryStorage)
        ↓
Sharp (crop to 450×350)
        ↓
Cloudinary (upload & store)
        ↓
MongoDB (store image URL)
```

**Benefits:**
- ✅ No local file storage
- ✅ Stateless backend
- ✅ Optimized for cloud deployment
- ✅ Automatic image optimization

---

## 📁 Project Structure

### Backend Structure
```
backend/
├── src/
│   ├── controllers/       # Request handlers
│   ├── models/           # Database schemas
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── config/           # Configuration files
│   ├── utils/            # Helper functions
│   ├── app.js            # Express app setup
│   └── server.js         # Server entry point
├── .env                  # Environment variables
├── package.json
└── README.md
```

### Frontend Structure
```
frontend/
├── src/
│   ├── admin/
│   │   ├── layout/       # Admin layout components
│   │   ├── pages/        # Admin pages
│   │   └── components/   # Admin-specific components
│   ├── components/       # Shared components
│   ├── services/         # API service layer
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── public/
├── .env                  # Environment variables
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Cloudinary account
- Git

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/riyaz-shaik-16/fullstack-application.git
cd fullstack-application
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=8989
MONGODB_URI=your_mongodb_connection_string
DB_NAME=real_estate_db
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the backend server:
```bash
npm run dev
```

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
```

Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:8989
```

Start the development server:
```bash
npm run dev
```

### 4️⃣ Access the Application
- **Frontend:** http://localhost:5173
- **Admin Panel:** http://localhost:5173/admin
- **Backend API:** http://localhost:8989

---

## 🔐 Environment Variables

### Backend (.env)
| Variable | Description |
|----------|-------------|
| `PORT` | Server port number |
| `MONGODB_URI` | MongoDB connection string |
| `DB_NAME` | Database name |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |

### Frontend (.env)
| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API base URL |

---

## 🚀 Deployment Guide

### Deploy Backend to Render
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables from `.env`
6. Deploy!

### Deploy Frontend to Vercel
1. Create a new **Project** on Vercel
2. Connect your **GitHub repository**
3. Select **Vite** as the framework preset
4. Set build command: `npm run build`
5. Set output directory: `dist`
6. Add environment variables in **Project Settings**
   - `VITE_API_URL = https://<your-render-backend-url>`
7. Deploy!

### MongoDB Atlas Setup
1. Create a cluster on MongoDB Atlas
2. Create a database user
3. Whitelist IP addresses (0.0.0.0/0 for all)
4. Get connection string and add to backend `.env`


---


</div>