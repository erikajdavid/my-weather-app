import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [passwordVisible, setPassWordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPassWordVisible(!passwordVisible);
    }

    const LogUserIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="signUpPage">
            <div className="formContainer">
                <h2>Welcome back!</h2>
                <form onSubmit={LogUserIn}>
                    <label htmlFor="email"></label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email:" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required></input>
                    <label htmlFor="password"></label>
                    <div className="passwordContainer">
                        <input 
                            type={passwordVisible ? 'text' : 'password'} 
                            name="password" 
                            className="password"
                            placeholder="Password:" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required>
                        </input>
                        <i className={`fa-regular ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'} faInvisible`} onClick={togglePasswordVisibility}></i>
                    </div>
                    <button type="submit">Log In</button>
                </form>
                <p>Don't have an account? <Link to="/signup" className="formLink">Sign up</Link></p>
            </div>
        </div>
    )
}

export default LogIn;
