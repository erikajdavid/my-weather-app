import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPassWordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPassWordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPassWordVisible(!passwordVisible);
    }

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPassWordVisible(!confirmPasswordVisible);
    }


    const signUpUser = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            console.log("Passwords do not match");
            return; // Exit the function if passwords do not match
        }

        createUserWithEmailAndPassword(auth, email, password, confirmPassword)
        .then((userCredential) => {
            console.log(userCredential);

        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="signUpPage">
            <div className="formContainer">
                <h2>Sign Up</h2>
                <form onSubmit={signUpUser}>
                    <label htmlFor="email"></label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required>
                    </input>
                    <label htmlFor="password"></label>
                    <div className="passwordContainer">
                        <input 
                            type={passwordVisible ? 'text' : 'password'} 
                            name="password" 
                            className="password" 
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required>
                        </input>
                        <i className={`fa-regular ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'} faInvisible`} onClick={togglePasswordVisibility}></i>
                    </div>
                    <label htmlFor="confirmPassword"></label>
                    <div className="passwordContainer">
                        <input 
                            type={confirmPasswordVisible ? 'text' : 'password'} 
                            name="confirmPassword" 
                            className="password" 
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required>
                        </input>
                        <i className={`fa-regular ${confirmPasswordVisible ? 'fa-eye' : 'fa-eye-slash'} faInvisible`} onClick={toggleConfirmPasswordVisibility}></i>
                    </div>
                    <button type="submit">Create an account</button>
                </form>
                <p>Already have an account? <Link to="/login" className="formLink">Log in</Link></p>
            </div>
        </div>
    )
}

export default SignUp;

