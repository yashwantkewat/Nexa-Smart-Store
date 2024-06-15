import React from "react";
import "../component/AllCssStyle/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-list">
       <li> <h3>top company</h3> </li>
        <li><h3>OUR Partner</h3></li>
        <li> <h3> Visit Our Website</h3></li>
        <li> <h3> OUR Top Product</h3> </li>

        <li><a href="https://www.amazon.com/">Amazon </a></li>
        <li><a>Myntra </a></li>
        <li><a>github </a></li>
        <li><a>Smartphone </a></li>

        <li><a href="https://www.flipcart.com/">Flipcart </a></li>
        <li><a>Alibaba </a></li>
        <li><a> facebook </a></li>
        <li><a>Galaxy s22 </a></li>

        <li><a href="https://www.jiomart.com/">JioMart </a></li>
        <li><a>Nyka </a></li>
        <li><a>Snapdeal </a></li>
        <li><a>macbook air13 </a></li>

        <li><a href="https://www.facebook.com/" >Facebook</a> </li>
        <li><i className="fab fa-instagram"></i> Instagram</li>
        <li><i className="fab fa-twitter"></i> Twitter</li>
        <li><i className="fab fa-linkedin"></i> LinkedIn</li>
      
      </ul>
      <div className="footer-copyright">
        &copy; 2024 Your Company. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
