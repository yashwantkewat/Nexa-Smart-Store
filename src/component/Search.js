import React, { useState } from "react";
import products from "./productData/Productdata";

const Search = ({ cart, setCart }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: "10px", backgroundColor: "#add8e6" }} >
            <h1>Search your product</h1>
            <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ padding: "10px", width: "300px" }}
            />

            <div style={{ marginTop: "20px" }}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            style={{
                                marginBottom: "40px",
                                border: "1px solid #ccc",
                                padding: "10px",
                                display: "inline-block",
                            }}
                        >
                            <img
                                src={product.imgsrc}
                                alt={product.name}
                                style={{ width: "300px", height: "300px" }}
                            />
                            <h2>{product.name}</h2>
                            <p>Price: ${product.price}</p>
                            <p>Discount: {product.discount}</p>
                            <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
           
        </div>
    );
};

export default Search;
