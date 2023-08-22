import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import ThemeBar from "./ThemeBar";

const Header = ({ mode, setMode, displaySignUp, handleSignUpClick, displayLogIn, handleLogInClick, user }) => {

    const handleToggleTheme = () => {
        setMode(prevTheme => !prevTheme);
    };

    const handleSignOut = () => {
        auth.signOut();
    }

    return (
        <header>
            <ThemeBar handleToggleTheme={handleToggleTheme} mode={mode} />
            {user ? (
                <div>
                    <p>Welcome, {user.email}</p>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
            ) : (
                <div className="buttonContainer">
                    <button className="signUpBtn" onClick={handleSignUpClick} displaySignUp={displaySignUp}>
                        <Link to="/signup" className="headerSignUpLink">Sign Up</Link>
                    </button>
                    <button className="logInBtn" onClick={handleLogInClick} displayLogIn={displayLogIn}>
                        <Link to="/login" className="headerLogInLink">Log In</Link>
                    </button>
                </div>
            )}
        </header>
    )
}

export default Header;
