import React from "react";
import "./DeleteConfirmModal.css";

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, productName }) => {
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Delete Product</h2>
        <p>
          Are you sure you want to delete{" "}
          <strong>{productName || "this product"}</strong>?
        </p>

        <div className="modal-actions">
          <button className="model-btn model-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="model-btn model-delete" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
