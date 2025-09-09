import { useEffect, useState } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./ProductsPage.css";
import Product from "../../components/product/Product";
import { getProducts } from "../../services/productservice";

const ProductsPage = () => {
//   const [products] = useState([
//     {
//       _id: "1",
//       name: "Pleated Skirt",
//       price: 139,
//       category: "Skirts",
//       image: "https://via.placeholder.com/250x300?text=Pleated+Skirt",
//     },
//     {
//       _id: "2",
//       name: "Silk Blend Blazer",
//       price: 299,
//       category: "Jackets",
//       image: "https://via.placeholder.com/250x300?text=Silk+Blazer",
//     },
//     {
//       _id: "3",
//       name: "Designer Midi Dress",
//       price: 189,
//       category: "Dresses",
//       image: "https://via.placeholder.com/250x300?text=Designer+Dress",
//     },
//     {
//       _id: "4",
//       name: "Premium Denim Jacket",
//       price: 159,
//       category: "Jackets",
//       image: "https://via.placeholder.com/250x300?text=Denim+Jacket",
//     },
//     {
//       _id: "5",
//       name: "Classic White Sneakers",
//       price: 79,
//       category: "Shoes",
//       image: "https://via.placeholder.com/250x300?text=Sneakers",
//     },
//     {
//       _id: "6",
//       name: "Leather Handbag",
//       price: 120,
//       category: "Accessories",
//       image: "https://via.placeholder.com/250x300?text=Handbag",
//     },
//     {
//       _id: "7",
//       name: "Wool Knit Sweater",
//       price: 89,
//       category: "Knitwear",
//       image: "https://via.placeholder.com/250x300?text=Knit+Sweater",
//     },
//     {
//       _id: "8",
//       name: "Smartwatch Pro",
//       price: 149,
//       category: "Electronics",
//       image: "https://via.placeholder.com/250x300?text=Smartwatch",
//     },
//     {
//       _id: "9",
//       name: "Trench Coat",
//       price: 210,
//       category: "Coats",
//       image: "https://via.placeholder.com/250x300?text=Trench+Coat",
//     },
//     {
//       _id: "10",
//       name: "Casual T-Shirt",
//       price: 39,
//       category: "Tops",
//       image: "https://via.placeholder.com/250x300?text=T-Shirt",
//     },
//     {
//       _id: "11",
//       name: "Slim Fit Jeans",
//       price: 89,
//       category: "Pants",
//       image: "https://via.placeholder.com/250x300?text=Jeans",
//     },
//     {
//       _id: "12",
//       name: "Running Shoes",
//       price: 110,
//       category: "Shoes",
//       image: "https://via.placeholder.com/250x300?text=Running+Shoes",
//     },
//   ]);
    const [products,setProducts] = useState([]);
        useEffect(()=>{
            const fetchProducts = async()=>{
                try{
                    const data = await getProducts();
                    setProducts(data);
                }
                catch(error){
                    console.error("Error fetching products:", error);
                }
            }
            fetchProducts();
        },[]);
  const [categories] = useState([
    "All",
    "Dresses",
    "Jackets",
    "Knitwear",
    "Shoes",
    "Accessories",
    "Coats",
    "Tops",
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // asc or desc
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const productsPerPage = 9;

  // 🔍 Filter, Search & Sort
  const filteredProducts = products
    .filter((p) =>
      selectedCategory === "All" ? true : p.category === selectedCategory
    )
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  // 📄 Pagination logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="products-page">
      <div className="title-section">
        <h1 className="page-title">All Products</h1>
        <p className="subtitle">
          Discover our complete collection of trendy fashion pieces
        </p>
      </div>

      <div className="main-section">
        {/* Mobile filter toggle */}
        <button
          className="filter-toggle"
          onClick={() => setSidebarOpen(true)}
        >
          Filters
        </button>
        <div
          className={`sidebar-overlay ${sidebarOpen ? "active" : ""}`}
          onClick={() => setSidebarOpen(false)}
        ></div>

        <div className="content">
          {/* Sidebar */}
          <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
            <h3>Filters</h3>
            <h2>Categories</h2>
            <ul>
              {categories.map((cat) => (
                <li
                  key={cat}
                  className={selectedCategory === cat ? "active" : ""}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSidebarOpen(false); // close drawer on select
                  }}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <main className="products-main-content">
            {/* Toolbar */}
            <div className="toolbar">
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="serch-btn">
                  <PiMagnifyingGlassBold />
                </button>
              </div>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="product-grid-container-wrapper">
              <div className="product-grid-container">
                {currentProducts.map((product, i) => (
                  <Product key={i} product={product} setProducts={setProducts} />
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="pagination">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="pre-page-btn"
              >
                <FaAngleLeft />
              </button>
              <span className="page-text">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="nxt-page-btn"
              >
                <FaAngleRight />
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
