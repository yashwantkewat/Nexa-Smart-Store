import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from "./component/section/Home";
import About from "./component/section/About";
import ShopNow from "./component/section/ShopNow";
import Cart from "./component/section/Cart";
import Favorite from "./component/section/Favorite";
import Search from './component/Search';
import Loginpage from './component/section/Loginpage';

const App = () => {
  const [cart, setCart] = useState([]);
  const [savedForLater, setSavedForLater] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const incrementQuantity = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const saveForLater = (productId) => {
    const productToSave = cart.find(item => item.id === productId);
    setSavedForLater([...savedForLater, productToSave]);
    handleRemoveFromCart(productId);
  };

  const handleOrderNow = () => {
    const confirmed = window.confirm("Are you sure you want to place the order?");
    if (confirmed) {
      // Implement order logic here
      console.log("Order placed:", cart);
      setCart([]); // Clear the cart after ordering
    }
  };

  return (
    <Router>
      <div style={{ backgroundColor: "#F5F7F8" }}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/loginpage" element={<Loginpage />} />
            <Route path="/shop-now" element={<ShopNow addToCart={addToCart} />} />
            <Route path="/cart" element={
              <Cart
                cart={cart}
                savedForLater={savedForLater}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                handleRemoveFromCart={handleRemoveFromCart}
                saveForLater={saveForLater}
                handleOrderNow={handleOrderNow}
              />
            } />
            <Route path="/favourite" element={<Favorite />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
