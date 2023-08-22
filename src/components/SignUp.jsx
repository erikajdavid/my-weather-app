import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [passwordVisible, setPassWordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPassWordVisible] = useState(false);


    const togglePasswordVisibility = () => {
        setPassWordVisible(!passwordVisible);
    }

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPassWordVisible(!confirmPasswordVisible);
    }

    return (
        <div className="signUpPage">
            <div className="formContainer">
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" required></input>
                    <label htmlFor="password">Password:</label>
                    <div className="passwordContainer">
                        <input 
                            type={passwordVisible ? 'text' : 'password'} 
                            name="password" 
                            className="password" 
                            required>
                        </input>
                        <i className={`fa-regular ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'} faInvisible`} onClick={togglePasswordVisibility}></i>
                    </div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <div className="passwordContainer">
                        <input 
                            type={confirmPasswordVisible ? 'text' : 'password'} 
                            name="confirmPassword" 
                            className="password" 
                            required>
                        </input>
                        <i className={`fa-regular ${confirmPasswordVisible ? 'fa-eye' : 'fa-eye-slash'} faInvisible`} onClick={toggleConfirmPasswordVisibility}></i>
                    </div>
                    <button type="submit">Get Started</button>
                </form>
                <p>Already have an account? <Link to="/login" className="formLink">Log in.</Link></p>
            </div>
        </div>
    )
}

export default SignUp;

