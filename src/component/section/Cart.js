import React,{useState} from "react";
import "../AllCssStyle/cart.css"; // Ensure you have styles for your modals

const Cart = ({ cart, savedForLater, incrementQuantity, decrementQuantity, handleRemoveFromCart, saveForLater,addToCart }) => {


    /////handle ornow function //////
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [orderDetails, setOrderDetails] = useState({
        firstName: "",
        lastName: "",
        home: "",
        address: "",
        area: "",
        pincode: "",
        landmark: "",
        paymentOption: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrderDetails({
            ...orderDetails,
            [name]: value
        });
    };

    const handleOrderNow = () => {
        setShowOrderModal(true);
    };

    const handleConfirmOrder = () => {
        setShowOrderModal(false);
        setShowConfirmModal(true);
    };

    const handleCloseConfirmModal = () => {
        setShowConfirmModal(false);
        alert("Order successfully delivered!");
    };


    return (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <span>{item.name}</span>
                            <span> - {item.quantity}</span>
                            <span> x ${item.price}</span>
                            <button onClick={() => incrementQuantity(item.id)}>+</button>
                            <button onClick={() => decrementQuantity(item.id)}>-</button>
                            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                            <button onClick={() => saveForLater(item.id)}>Save for Later</button>
                        </li>
                    ))}
                </ul>
            )}

            {savedForLater.length > 0 && (
                <div>
                    <h3>Saved for Later</h3>
                    <ul>
                        {savedForLater.map((item, index) => (
                            <li key={index}>
                                <span>{item.name}</span>
                                <span> - {item.quantity}</span>
                                <span> x ${item.price}</span>
                                <button onClick={() => addToCart(item)}>Move to Cart</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}


<button onClick={handleOrderNow}>Order Now</button>
            
            {showOrderModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Enter Your Details</h2>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={orderDetails.firstName}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={orderDetails.lastName}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="home"
                            placeholder="Home"
                            value={orderDetails.home}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={orderDetails.address}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="area"
                            placeholder="Area"
                            value={orderDetails.area}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="pincode"
                            placeholder="Pincode"
                            value={orderDetails.pincode}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="landmark"
                            placeholder="Landmark"
                            value={orderDetails.landmark}
                            onChange={handleInputChange}
                        />
                        <select
                            name="paymentOption"
                            value={orderDetails.paymentOption}
                            onChange={handleInputChange}
                        >
                            <option value="">Select Payment Option</option>
                            <option value="gpay">GPay</option>
                            <option value="paytm">Paytm</option>
                            <option value="upi">UPI</option>
                        </select>
                        <button onClick={handleConfirmOrder}>Confirm</button>
                        <button onClick={() => setShowOrderModal(false)}>Cancel</button>
                    </div>
                </div>
            )}

            {showConfirmModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Order Confirmation</h2>
                        <p>Thank you for your order! It has been successfully placed.</p>
                        <button onClick={handleCloseConfirmModal}>OK</button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Cart;
