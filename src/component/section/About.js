import React from "react";
import '../AllCssStyle/about.css'; // Assuming you have a CSS file for styling
import  pic from "../AllCssStyle/Smartstore.jpg"

const About = () => {
    return (
        <div className="about-container">
            <h1>ABOUT Us</h1>
            <div className="about-content">
                <img src={pic} alt="Our Company" className="about-image" />
                <div className="about-text">
                    <p>
                        Welcome to [Nexa smart Store], your number one source for [Product/E-commerce ]. We're dedicated to giving you the very best of [Product/Service], with a focus on quality, customer service, and uniqueness.
                    </p>
                    <p>
                        Founded in [2018] by [Json & Friends ], [Json & company] has come a long way from its beginnings in [Indore]. When [Json ] first started out, [his/her/their] passion for [Brand Message - e.g., "eco-friendly products"] drove them to start their own business.
                    </p>
                    <p>
                        We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                    </p>
                    <p>
                        Sincerely,
                    </p>
                    <p>
                        [JSON & Friends], Founder
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
