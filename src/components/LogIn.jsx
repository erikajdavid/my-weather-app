import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const LogIn = () => {

    const [passwordVisible, setPassWordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPassWordVisible(!passwordVisible);
    }
    return (
        <div className="signUpPage">
            <div className="formContainer">
                <h2>Welcome back!</h2>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" required></input>
                    <label htmlFor="password">Password:</label>
                    <div className="passwordContainer">
                        <input 
                            type={passwordVisible ? 'text' : 'password'} 
                            name="password" 
                            className="password" 
                            required></input>
                        <i className={`fa-regular ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'} faInvisible`} onClick={togglePasswordVisibility}></i>
                    </div>
                    <button type="submit">Log In</button>
                </form>
                <p>Don't have an account? <Link to="/signup" className="formLink">Sign up here.</Link></p>
            </div>
        </div>
    )
}

export default LogIn;
