import { useState } from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import DeleteConfirmModal from "../models/deletemodel/DeleteConfirmModal";
const Product = ({product,setProducts})=>{
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <div className="product-card">
                <div className="img-container">
                    <span className="category">{product.category}</span>
                    <span onClick={()=>{setOpenModal(true)}} className="delete-btn"><RiDeleteBinLine/></span>
                    {product.image && <img src="/images/product.jpg"  alt={product.name} />}
                    <div className="img-overly"></div>
                </div>
                <div className="product-detiles">
                    <h3 >{product.name}</h3>
                    <p className="product-decription">"Do you want me to also generate a more realistic dataset (with descriptions, ratings, stock count), so"</p>
                    <div className="price-btn-container">
                        <p className="price">${product.price}</p>
                        <button onClick={()=>{navigate(`/edit-product/${product._id}`,{ state: { product } })}} className="addcart-btn">Edit Product</button>
                    </div>
                </div>
            </div>
            <DeleteConfirmModal
                isOpen={openModal}
                product={product}
                onClose={() => setOpenModal(false)}
                onConfirm={() => {
                    setProducts((prev) => prev.filter((p) => p._id !== product._id));
                    setOpenModal(false);
                }}
            />
        </>
    )
}

export default Product;