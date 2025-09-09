// src/App.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/home/Homepage";
import ProductsPage from "./pages/products/ProductsPage";


export default function App() {
  return (
    <Router>
      <Header />
      <main className="main-page">
        <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/products" element={<ProductsPage />} />
          {/*
          
          <Route path="/addproduct" element={<AddProductPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

