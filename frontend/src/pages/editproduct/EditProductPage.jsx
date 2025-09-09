import React, {  useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "../addproduct/AddProductPage.css";
import { updateProduct } from "../../services/productService";

const EditProductPage = () => {
  const { id } = useParams(); // get product ID from URL
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const defaultProduct = {
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
  };
  const productGet = location.state?.product;
  const productData = {...defaultProduct,...productGet};
  
  const [formData, setFormData] = useState(productData);

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

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`/api/products/${id}`);
//         const data = await res.json();
//         setFormData({
//           name: data.name || "",
//           price: data.price || "",
//           description: data.description || "",
//           category: data.category || "",
//           image: data.image || "",
//         });
//       } catch (err) {
//         console.error("Error fetching product:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

  // ✅ Validation function
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

  // ✅ Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle category select
  const handleCategorySelect = (cat) => {
    setFormData((prev) => ({ ...prev, category: cat }));
    setErrors((prev) => ({ ...prev, category: "" })); // clear error
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (validate()) {
    try {
      setLoading(true);
      const updated = await updateProduct(id, formData); 
      console.log("Updated product:", updated);

      alert("✅ Product updated successfully!");
      navigate("/products"); // redirect to product list
    } catch (err) {
      console.error("Update error:", err);
      alert("❌ Error updating product");
    }
    setLoading(false);
  }
};



  return (
    <div className="add-product-page-section">
      <div className="title-section">
        <h1 className="page-title">Update Product</h1>
        <p className="subtitle">Modify product details</p>
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
                className={`${errors.name ? "error-input" : ""}`}
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter product name"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            {/* Category */}
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
            <button type="submit" disabled={loading} className="btn-submit">
              {loading?"Loading...":"Update Product"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProductPage;
