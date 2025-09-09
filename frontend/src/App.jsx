// src/App.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footers/Footer";
import HomePage from "./pages/homepage/Homepage";
import ProductsPage from "./pages/products/ProductsPage";
import AddProductPage from "./pages/addproduct/AddProductPage";
import EditProductPage from "./pages/editproduct/EditProductPage";


export default function App() {
  return (
    <Router>
      <Header />
      <main className="main-page">
        <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/products" element={<ProductsPage />} />
           <Route path="/addproduct" element={<AddProductPage />} />
           <Route path="/edit-product/:id" element = {<EditProductPage/>}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

