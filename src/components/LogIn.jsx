import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginErrorMessage, setLoginErrorMessage] = useState('');
    const [key, setKey] = useState(0); 

    const [passwordVisible, setPassWordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPassWordVisible(!passwordVisible);
    }

    const navigate = useNavigate();

    const logInUser = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            navigate('/');
        }).catch((error) => {
            console.log(error);
            setLoginErrorMessage('Invalid email or password. Please try again.')
            setKey(prevKey => prevKey + 1);
        })
    }

    return (
        <div className="signUpPage">
            <div className="formContainer">
                <h2>Welcome back!</h2>
                <form onSubmit={logInUser}>
                    <label htmlFor="email"></label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required></input>
                    <label htmlFor="password"></label>
                    <div className="passwordContainer">
                        <input 
                            type={passwordVisible ? 'text' : 'password'} 
                            name="password" 
                            className="password"
                            placeholder="Password" 
                            value={password}s
                            onChange={(e) => setPassword(e.target.value)}
                            required>
                        </input>
                        <i className={`fa-regular ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'} faInvisible`} onClick={togglePasswordVisibility}></i>
                    </div>
                    {loginErrorMessage && <p key={key} className={`loginError ${loginErrorMessage && 'shake'}`}>{loginErrorMessage}</p>}
                    <button type="submit">Log In</button>
                </form>
                <p>Don't have an account? <Link to="/signup" className="formLink">Sign up</Link></p>
            </div>
        </div>
    )
}

export default LogIn;
