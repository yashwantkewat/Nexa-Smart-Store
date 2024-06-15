import { Link } from "react-router-dom";
import "./AllCssStyle/header.css";  // Import the CSS file

const Header = () => {
    return (
        <>
            <header className="header">
                <h1 className="header-title">Welcome to Nexa Smart Store</h1>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item"><Link to="/about">About</Link></li>
                        <li className="nav-item"><Link to="/loginpage">Login page</Link></li>
                        <li className="nav-item"><Link to="/Shop-Now">Shop Now</Link></li>
                        <li className="nav-item"><Link to="/cart">Cart</Link></li>
                        <li className="nav-item"><Link to="/favourite">Favourite</Link></li>
                        <li className="nav-item"><Link to="/search">Search</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
