import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth, database } from '../firebase';
import { ref, set } from 'firebase/database';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPassWordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPassWordVisible] = useState(false);
    const [signupErrorMessage, setSignupErrorMessage] = useState('');
    const [passwordsMatchError, setPasswordsMatchError] = useState(false); // New state for password match error
    const [key, setKey] = useState(0); // Initialize key


    const togglePasswordVisibility = () => {
        setPassWordVisible(!passwordVisible);
    }

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPassWordVisible(!confirmPasswordVisible);
    }

    const navigate = useNavigate();

    const signUpUser = async (e) => {
        e.preventDefault();

        if (password.length < 6) {
            setSignupErrorMessage('Password should be at least 6 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            setPasswordsMatchError(true); // Set password match error
            return; // Exit the function if passwords do not match
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password, confirmPassword);
            const userUID = userCredential.user.uid;
            const userEmail = userCredential.user.email;

            // Save UID to the Firebase Realtime Database using ref
            const userRef = ref(database, `users/${userUID}`);
            set(userRef, { uid: userUID, email: userEmail });

            console.log(userEmail);
            console.log(userCredential);

            navigate('/');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setSignupErrorMessage('An account with this email already exists.');
                setKey(prevKey => prevKey + 1); // Increment key
            } else {
                console.log(error);
            }
        }
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
                    {passwordsMatchError && <p className={`passwordsMatchError ${passwordsMatchError && 'shake'}`}>
                        Passwords do not match. Please enter again.
                    </p>}
                    {signupErrorMessage && <p key={key} className={`signupError ${signupErrorMessage && 'shake'}`}>{signupErrorMessage}</p>}
                    <button type="submit">Create an account</button>
                </form>
                <p>Already have an account? <Link to="/login" className="formLink">Log in</Link></p>
            </div>
        </div>
    )
}

export default SignUp;

