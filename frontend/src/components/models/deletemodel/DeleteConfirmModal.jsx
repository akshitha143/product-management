import React from "react";
import "./DeleteConfirmModal.css";
import { deleteProduct } from "../../../services/productService";
import { useState } from "react";

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, product }) => {
  const [loading,setLoading]=useState(false);
  if (!isOpen) return null; 
  const handleDelete = async () => {

    try {
      setLoading(true);
      await deleteProduct(product._id);
      onConfirm()
      alert("✅ Product deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      alert("❌ Error deleting product");
    }
    setLoading(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Delete Product</h2>
        <p>
          Are you sure you want to delete{" "}
          <strong>{product.name || "this product"}</strong>?
        </p>

        <div className="modal-actions">
          <button className="model-btn model-cancel" onClick={onClose}>
            Cancel
          </button>
          <button disabled={loading} className="model-btn model-delete" onClick={handleDelete}>
            {loading?"Loading":"Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
