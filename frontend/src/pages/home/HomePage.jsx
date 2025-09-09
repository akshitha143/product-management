// src/pages/HomePage.jsx
import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
    const navigate = useNavigate();
    const [products,] = useState([
  {
    _id: "1",
    name: "Classic White Sneakers",
    price: 59.99,
    category: "Footwear",
    image: "https://via.placeholder.com/250x200?text=Sneakers",
  },
  {
    _id: "2",
    name: "Leather Handbag",
    price: 89.99,
    category: "Accessories",
    image: "https://via.placeholder.com/250x200?text=Handbag",
  },
  {
    _id: "3",
    name: "Smartwatch Pro",
    price: 149.99,
    category: "Electronics",
    image: "https://via.placeholder.com/250x200?text=Smartwatch",
  },
  {
    _id: "4",
    name: "Denim Jacket",
    price: 74.99,
    category: "Clothing",
    image: "https://via.placeholder.com/250x200?text=Jacket",
  },
  {
    _id: "5",
    name: "Wireless Earbuds",
    price: 39.99,
    category: "Electronics",
    image: "https://via.placeholder.com/250x200?text=Earbuds",
  },
  {
    _id: "6",
    name: "Cotton T-Shirt",
    price: 19.99,
    category: "Clothing",
    image: "https://via.placeholder.com/250x200?text=T-Shirt",
  }
]);

    return (
        <>
            <section className="hero">
            <div className="overlay">
                <div className="hero-content">
                    <div className="tag">
                        <div className="dot"></div> 
                        <p>New Collection 2024</p></div>
                    <div className="title-section">
                        <h1 className="hero-title">Fashion <br /> Revolution</h1>
                        <p className="text-subtitle">
                            Where luxury meets innovation. Discover pieces that tell your story.
                        </p>
                        <p className="text-description">
                            From runway to reality - elevate your wardrobe with our exclusive designer collection
                        </p>
                    </div>
                    
                
                    <div className="hero-buttons">
                        <button onClick={()=>{navigate("/products")}} className="hero-btn hero-primary">Explore Collection</button>
                        <button onClick={()=>{navigate("/products")}} className="hero-btn hero-secondary">▶ Watch Collection</button>
                    </div>

                    <div className="stats">
                        <div className="stat">
                            <h3>500+</h3>
                            <p>Premium Items</p>
                        </div>
                        <div className="stat">
                            <h3>50k+</h3>
                            <p>Happy Customers</p>
                        </div>
                        <div className="stat">
                            <h3>4.9 ★</h3>
                            <p>Customer Rating</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section className="featured-section">
                <h2 className="title">Featured Collection</h2>
                <p className="subtitle">
                    Handpicked pieces that define this season's most coveted styles
                </p>

                <div className="product-grid">
                    {products.map((product) => (
                    <div key={product._id} className="product-card">
                        <div className="img-container">
                            <span className="category">{product.category}</span>
                            <span className="delete-btn"><RiDeleteBinLine/></span>
                            {product.image && <img src="/images/product.jpg"  alt={product.name} />}
                            <div className="img-overly"></div>
                        </div>
                        <div className="product-detiles">
                            <h3>{product.name}</h3>
                            <p className="price">${product.price}</p>
                        </div>
                    </div>
                    ))}
                </div>

                <button onClick={()=>{navigate("/products")}} className="btn-view">View All Products</button>
            </section>
        </>
    );
}
