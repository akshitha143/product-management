import React from "react";
import "./DeleteConfirmModal.css";
import { deleteProduct } from "../../../services/ProductService";

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, product }) => {
  if (!isOpen) return null; 
  const handleDelete = async () => {

    try {
      await deleteProduct(product._id);
      onConfirm()
      alert("✅ Product deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      alert("❌ Error deleting product");
    }
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
          <button className="model-btn model-delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
