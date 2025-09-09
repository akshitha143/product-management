import React, { useState } from "react";
import "./AddProductPage.css";
import { createProduct } from "../../services/productservice";

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });
  const [errors, setErrors] = useState({});
  const categories = [
    "Dresses",
    "Jackets",
    "Knitwear",
    "Accessories",
    "Coats",
    "Tops",
    "Pants",
    "Skirts",
  ];

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Product name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Product name must be at least 3 characters";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required";
    }

    if (!formData.price) {
      newErrors.price = "Price is required";
    } else if (Number(formData.price) <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    if (!formData.image.trim()) {
      newErrors.image = "Image URL is required";
    } else if (
      !/^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/\S*)?$/i.test(formData.image)
    ) {
      newErrors.image = "Enter a valid image URL (jpg, png, gif, webp)";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategorySelect = (cat) => {
    setFormData((prev) => ({ ...prev, category: cat }));
    setErrors((prev) => ({ ...prev, category: "" })); // clear error on select
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  if (validate()) {
    try {
      const newProduct = await createProduct(formData);
      console.log("Product created:", newProduct);

      
      setFormData({
        name: "",
        price: "",
        description: "",
        category: "",
        image: "",
      });
      setErrors({});
      
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Failed to add product. Please try again.");
    }
  }
};


  return (
    <div className="add-product-page-section">
      <div className="title-section">
        <h1 className="page-title">Add New Product</h1>
        <p className="subtitle">
          Submit your fashion product to our collection
        </p>
      </div>

      <div className="form-section">
        <div className="product-section-container">
          <form className="product-section" onSubmit={handleSubmit}>
            {/* Product Name */}
            <div className="form-group">
              <label>Product Name *</label>
              <input
                type="text"
                name="name"
                className={`${errors.name ? "error-input":""}`}
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter product name"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            {/* Category (Button Group) */}
            <div className="form-group">
              <label>Category *</label>
              <div className="category-buttons">
                {categories.map((cat) => (
                  <button
                    
                    type="button"
                    key={cat}
                    className={`category-btn ${
                      formData.category === cat ? "category-btn-active" : ""
                    }`}
                    onClick={() => handleCategorySelect(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              {errors.category && (
                <span className="error">{errors.category}</span>
              )}
            </div>

            {/* Price */}
            <div className="form-group">
              <label>Price *</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
              />
              {errors.price && <span className="error">{errors.price}</span>}
            </div>

            {/* Image URL */}
            <div className="form-group">
              <label>Product Image (URL) *</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Enter image URL"
              />
              {errors.image && <span className="error">{errors.image}</span>}
            </div>

            {/* Description */}
            <div className="form-group">
              <label>Product Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your product in detail..."
              ></textarea>
              {errors.description && (
                <span className="error">{errors.description}</span>
              )}
            </div>

            {/* Submit */}
            <button type="submit" className="btn-submit">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
