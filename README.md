# 🛍️ Product Management Application

A **full-stack web application** built with **React.js (Frontend)**, **Node.js + Express (Backend)**, and **MongoDB (Database)**.  
It allows users to manage products with CRUD operations, sorting, and searching.

---

## 🚀 Project Overview
This project demonstrates the integration of **React.js**, **Express.js**, and **MongoDB** to build a simple yet complete product management system.  

- **Frontend**: React.js with custom CSS (no frameworks).  
- **Backend**: Node.js with Express, connected to MongoDB via Mongoose.  
- **Database**: MongoDB Atlas.  

---

## ⚡ Technologies Used

### Frontend
- React.js (Functional Components + Hooks)
- React Router DOM
- Custom CSS (no UI frameworks)
- Fetch API for backend communication

### Backend
- Node.js
- Express.js
- Mongoose (MongoDB ODM)
- CORS, dotenv

### Deployment
- **Frontend**: Vercel  
- **Backend**: Render  
- **Database**: MongoDB Atlas  

---

## 📂 Folder Structure

### Root
```
product-management/
├── backend/ # Node.js + Express backend
├── frontend/ # React.js frontend
└── README.md # This file
```

### Backend (`/backend`)
```
backend/
├── src/
│ ├── index.js # Main server entry
│ ├── routes/ # API routes
│ ├── controllers/ # Business logic
│ ├── models/ # Mongoose schemas
│ └── config/ # DB connection
├── package.json
└── .env
```

### Frontend (`/frontend`)
```
frontend/
├── src/
│ ├── components/ # Reusable UI components
│ │ ├── Header/
│ │ ├── Footer/
│ │ └── ProductCard/
│ ├── pages/ # App pages
│ │ ├── home/
│ │ ├── products/
│ │ ├── addproduct/
│ │ └── editproduct/
│ ├── services/ # API service functions
│ ├── App.jsx
│ └── index.js
├── package.json
└── .env

```
---

## 📡 Backend API Endpoints

| Method | Endpoint             | Description            |
|--------|----------------------|------------------------|
| GET    | `/api/products`      | Get all products       |
| POST   | `/api/products`      | Add a new product      |
| PUT    | `/api/products/:id`  | Update product by ID   |
| DELETE | `/api/products/:id`  | Delete product by ID   |

---

## 🎨 Frontend Components & Pages

### Components
- **Header** → Navigation bar with logo, links, cart, and user profile.  
- **Footer** → Brand info, quick links, social media icons.  
- **ProductCard** → Reusable component for displaying a product.  

### Pages
- **HomePage** → Landing page with intro banner.  
- **ProductsPage** → Displays products in a grid with sorting & delete.  
- **AddProductPage** → Form to add a new product (with validation).  
- **EditProductPage** → Update an existing product.  
- **LandingPage** → Initial product showcase.  

---

## 🔗 GitHub Repository

👉 [GitHub Repo Link](https://github.com/akshitha143/product-management)

### Clone the repository
```bash
git clone https://github.com/akshitha143/product-management.git
cd product-management

cd backend
npm install
npm start

cd frontend
npm install
npm run dev   

```
---

## 🚀 Deployment

- **Frontend (React)** → Deployed on **Vercel**  
  👉 https://product-management-sigma-one.vercel.app/

- **Backend (Express)** → Deployed on **Render**  

- **Database (MongoDB)** → Hosted on **MongoDB Atlas**  

---

## ✨ Features Implemented

- ✅ Product CRUD (Create, Read, Update, Delete)  
- ✅ Product sorting by price  
- ✅ Product search by name  
- ✅ Filter by categories 
- ✅ Form validation (name, category, price, image URL, description)  
- ✅ Delete confirmation  
- ✅ Responsive UI with custom CSS animations  
- ✅ Deployment with Vercel + Render  

---

## 🏁 Conclusion

This project demonstrates a **full-stack MERN-style workflow** with:  

- **Frontend (React)** for UI  
- **Backend (Express)** for APIs  
- **MongoDB (Atlas)** for storage  
- **Vercel + Render** for deployment  

It covers the **complete lifecycle** of a product management app: add → view → update → delete.  
Future enhancements can include **authentication, pagination, and role-based access control**.  

---


![Home Page](https://github.com/akshitha143/product-management/blob/main/frontend/public/screenshorts/img1.png)
![Products Page](https://github.com/akshitha143/product-management/blob/main/frontend/public/screenshorts/img2.png)
![Add Product](https://github.com/akshitha143/product-management/blob/main/frontend/public/screenshorts/img3.png)
![Footer](https://github.com/akshitha143/product-management/blob/main/frontend/public/screenshorts/img4.png)
![Delete Product](https://github.com/akshitha143/product-management/blob/main/frontend/public/screenshorts/img5.png)
![Edit Product](https://github.com/akshitha143/product-management/blob/main/frontend/public/screenshorts/img6.png)
