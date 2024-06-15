import React, { useState, useEffect } from "react";
import "../AllCssStyle/LoginPage.css"; // Import your CSS file for styling

const formConfig = {
    login: [
        { name: "email", type: "email", placeholder: "Email", required: true },
        { name: "password", type: "password", placeholder: "Password", required: true }
    ],
    signup: [
        { name: "email", type: "email", placeholder: "Email", required: true },
        { name: "password", type: "password", placeholder: "Password", required: true },
        { name: "address", type: "text", placeholder: "Address", required: false },
        { name: "pincode", type: "text", placeholder: "Pin Code", required: false },
        { name: "area", type: "text", placeholder: "Area", required: false },
        { name: "country", type: "text", placeholder: "Country", required: false }
    ]
};

const LoginPage = () => {
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [signupData, setSignupData] = useState({ email: "", password: "", address: "", pincode: "", area: "", country: "" });
    const [loginErrors, setLoginErrors] = useState({});
    const [signupErrors, setSignupErrors] = useState({});
    const [timer, setTimer] = useState(null);
    const [showForms, setShowForms] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [userData, setUserData] = useState(null);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [forgotPasswordData, setForgotPasswordData] = useState({ identifier: "", otp: "", newPassword: "" });
    const [forgotPasswordStep, setForgotPasswordStep] = useState(1);
    const [otpSent, setOtpSent] = useState(false);
    const [otpError, setOtpError] = useState("");

    useEffect(() => {
        const storedLoginData = localStorage.getItem("loginData");
        if (storedLoginData) {
            const parsedData = JSON.parse(storedLoginData);
            setUserData(parsedData);
            setLoginData(parsedData);
        }
    
        const timerId = setTimeout(() => {
            setShowForms(false);
        }, 500000); // 5000 milliseconds = 5 seconds
    
        return () => {
            clearTimeout(timerId); // Cleanup by clearing the timeout
        };
    }, []);
    
    
    

    const handleSubmit = (e, formType) => {
        e.preventDefault();
        const formData = formType === "login" ? loginData : signupData;
        const setErrors = formType === "login" ? setLoginErrors : setSignupErrors;
        const errors = {};
        
        formConfig[formType].forEach(field => {
            if (field.required && !formData[field.name]) {
                errors[field.name] = `${field.placeholder} is required`;
            }
        });

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log(`${formType === "login" ? "Logging in" : "Signing up"}...`);
            localStorage.setItem("loginData", JSON.stringify(formData));
            setShowPopup(true);
        }
    };

    const handleInputChange = (e, formType) => {
        const { name, value } = e.target;
        if (formType === "login") {
            setLoginData({ ...loginData, [name]: value });
        } else if (formType === "signup") {
            setSignupData({ ...signupData, [name]: value });
        } else if (formType === "forgotPassword") {
            setForgotPasswordData({ ...forgotPasswordData, [name]: value });
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const handleForgotPasswordSubmit = (e) => {
        e.preventDefault();
        // Simulate sending OTP
        console.log("Sending OTP...");
        setOtpSent(true);
        setForgotPasswordStep(2);
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        // Simulate OTP verification
        if (forgotPasswordData.otp === "1234") {
            setOtpError("");
            setForgotPasswordStep(3);
        } else {
            setOtpError("Invalid OTP. Please try again.");
        }
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        // Simulate password reset
        console.log("Password reset successful.");
        localStorage.setItem("loginData", JSON.stringify({ email: forgotPasswordData.identifier, password: forgotPasswordData.newPassword }));
        setShowPopup(true);
        setIsForgotPassword(false);
        setForgotPasswordStep(1);
    };

    const renderForm = (formType, formData, formErrors) => (
        <form onSubmit={(e) => handleSubmit(e, formType)}>
            {formConfig[formType].map(field => (
                <div key={field.name}>
                    <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={(e) => handleInputChange(e, formType)}
                        className={formErrors[field.name] ? "error" : ""}
                    />
                    {formErrors[field.name] && <span>{formErrors[field.name]}</span>}
                    <br />
                </div>
            ))}
            <button type="submit">{formType === "login" ? "Login" : "Signup"}</button>
        </form>
    );

    const renderForgotPasswordForm = () => {
        switch (forgotPasswordStep) {
            case 1:
                return (
                    <form onSubmit={handleForgotPasswordSubmit}>
                        <input
                            type="text"
                            name="identifier"
                            placeholder="Enter your email or phone number"
                            value={forgotPasswordData.identifier}
                            onChange={(e) => handleInputChange(e, "forgotPassword")}
                        />
                        <button type="submit">Send OTP</button>
                    </form>
                );
            case 2:
                return (
                    <form onSubmit={handleVerifyOtp}>
                        <input
                            type="text"
                            name="otp"
                            placeholder="Enter OTP"
                            value={forgotPasswordData.otp}
                            onChange={(e) => handleInputChange(e, "forgotPassword")}
                        />
                        {otpError && <span>{otpError}</span>}
                        <button type="submit">Verify OTP</button>
                    </form>
                );
            case 3:
                return (
                    <form onSubmit={handleResetPassword}>
                        <input
                            type="password"
                            name="newPassword"
                            placeholder="Enter new password"
                            value={forgotPasswordData.newPassword}
                            onChange={(e) => handleInputChange(e, "forgotPassword")}
                        />
                        <button type="submit">Reset Password</button>
                    </form>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container">
            {showForms && (
                <div className="forms-container">
                    {!isForgotPassword ? (
                        <>
                            <h1>Login</h1>
                            {renderForm("login", loginData, loginErrors)}
                            <p onClick={() => setIsForgotPassword(true)} style={{ cursor: "pointer", color: "blue" }}>Forgot Password?</p>

                            <h1>Signup</h1>
                            {renderForm("signup", signupData, signupErrors)}
                        </>
                    ) : (
                        <>
                            <h1>Forgot Password</h1>
                            {renderForgotPasswordForm()}
                            <p onClick={() => setIsForgotPassword(false)} style={{ cursor: "pointer", color: "blue" }}>Back to Login</p>
                        </>
                    )}
                </div>
            )}

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopup}>&times;</span>
                        <p>Data saved in local storage.</p>
                    </div>
                </div>
            )}

            {userData && (
                <div>
                    <h2>User Data</h2>
                    <p>Email: {userData.email}</p>
                    <p>Password: {userData.password}</p>
                    <p>Address: {userData.address}</p>
                    <p>Pin Code: {userData.pincode}</p>
                    <p>Area: {userData.area}</p>
                    <p>Country: {userData.country}</p>
                </div>
            )}
        </div>
    );
};

export default LoginPage;
