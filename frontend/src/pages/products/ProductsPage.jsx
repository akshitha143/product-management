import { useEffect, useState } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./ProductsPage.css";
import Product from "../../components/product/Product";
import { getProducts } from "../../services/productService";

const ProductsPage = () => {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        const fetchProducts = async()=>{
            try{
                setLoading(true);
                const data = await getProducts();
                setProducts(data);
            }
            catch(error){
                console.error("Error fetching products:", error);
            }
            setLoading(false);
        }
        fetchProducts();
        },
    []);
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
    const filteredProducts = products
        .filter((p) =>
          selectedCategory === "All" ? true : p.category === selectedCategory
        )
        .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) =>
          sortOrder === "asc" ? a.price - b.price : b.price - a.price
        );

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
              <button className="filter-toggle" onClick={() => setSidebarOpen(true)}>
                Filters
              </button>
              <div className={`sidebar-overlay ${sidebarOpen ? "active" : ""}`} onClick={() => setSidebarOpen(false)}></div>
              <div className="content">
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
                              setSidebarOpen(false); 
                            }}
                          >
                            {cat}
                          </li>
                        ))}
                      </ul>
                  </aside>
                  <main className="products-main-content">
                      <div className="toolbar">
                          <div className="input-container">
                              <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)}/>
                              <button className="serch-btn">
                                <PiMagnifyingGlassBold />
                              </button>
                          </div>
                          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                            <option value="asc">Low to High</option>
                            <option value="desc">High to Low</option>
                          </select>
                      </div>

                      <div className="product-grid-container-wrapper">
                          <div className="product-grid-container">
                              {loading&& <p className="product-loding-text">Loading...</p>}
                              {currentProducts.map((product, i) => (
                                <Product key={i} product={product} setProducts={setProducts} />
                              ))}
                          </div>
                      </div>

                      <div className="pagination">
                          <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="pre-page-btn">
                            <FaAngleLeft />
                          </button>
                          <span className="page-text">
                            Page {currentPage} of {totalPages}
                          </span>
                          <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className="nxt-page-btn">
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
