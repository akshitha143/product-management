import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { getProducts } from "../../services/productService";

const LandingPage = ()=> {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const fetchProducts = async()=>{
            try{
                setLoading(true);
                const data = await getProducts();
                setProducts(data.slice(0, 6));
            }
            catch(error){
                console.error("Error fetching products:", error);
            }
            setLoading(false);
        }
        fetchProducts();
    },[]);
    return (
        <>
            <section className="hero">
                <div className="overlay">
                    <div className="hero-content">
                        <div className="tag">
                            <div className="dot"></div> 
                            <p>New Collection 2024</p>
                        </div>
                        <div className="hero-title-section">
                            <h1 className="hero-title">Fashion <br /> Revolution</h1>
                            <p className="hero-text-subtitle">
                                Where luxury meets innovation. Discover pieces that tell your story.
                            </p>
                            <p className="hero-text-description">
                                From runway to reality - elevate your wardrobe with our exclusive designer collection
                            </p>
                        </div>
                        <div className="hero-buttons">
                            <button onClick={()=>{navigate("/products")}} className="hero-btn hero-primary">Explore Collection</button>
                            <button onClick={()=>{navigate("/products")}} className="hero-btn hero-secondary">▶ Watch Collection</button>
                        </div>
                        <div className="stats">
                            <div className="stat">
                                <h3>500+</h3>
                                <p>Premium Items</p>
                            </div>
                            <div className="stat">
                                <h3>50k+</h3>
                                <p>Happy Customers</p>
                            </div>
                            <div className="stat">
                                <h3>4.9 ★</h3>
                                <p>Customer Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="featured-section">
                <h2 className="title">Featured Collection</h2>
                <p className="subtitle">
                    Handpicked pieces that define this season's most coveted styles
                </p>
                <div className="product-grid">
                    {loading&&<p className="home-loding-text">Loading...</p>}
                    {products.map((product) => (
                        <div key={product._id} className="product-card">
                            <div className="img-container">
                                <span className="category">{product.category}</span>
                                {product.image && <img src={product.image}  alt={product.name} />}
                                <div className="img-overly"></div>
                            </div>
                            <div className="product-detiles">
                                <h3>{product.name}</h3>
                                <p className="price">${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={()=>{navigate("/products")}} className="btn-view">View All Products</button>
            </section>
        </>
    );
}


export default LandingPage;