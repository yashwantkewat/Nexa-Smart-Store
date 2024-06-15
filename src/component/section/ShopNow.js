import "../AllCssStyle/shopnow.css";
import products from "../productData/Productdata";

const ShopNow = ({ addToCart }) => {
    const handleAddToCart = (product) => {
        const confirmed = window.confirm(`Add ${product.name} to cart?`);
        if (confirmed) {
            addToCart(product);
        }
    };

    return (
        <div className="shop-now">
            <h1>Welcome to Shop Now</h1>
            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.imgsrc} alt={product.name} className="product-image" />
                        <h4 className="product-name">{product.name}</h4>
                        <div className="product-details">
                            <span className="product-price">${product.price}</span>
                            <span className="product-discount">{product.discount}% off</span>
                        </div>
                        <div className="product-actions">
                            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                            <span className="favourite-icon">❤️</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopNow;
