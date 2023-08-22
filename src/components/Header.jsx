import React from 'react';
import { Link } from 'react-router-dom';
import ThemeBar from "./ThemeBar";

const Header = ({ mode, setMode, displaySignUp, handleSignUpClick, displayLogIn, handleLogInClick }) => {

    const handleToggleTheme = () => {
        setMode(prevTheme => !prevTheme);
    };

    return (
        <header>
            <ThemeBar handleToggleTheme={handleToggleTheme} mode={mode} />
            <div className="buttonContainer">
                <button className="signUpBtn" onClick={handleSignUpClick} displaySignUp={displaySignUp}>
                    <Link to="/signup" className="headerSignUpLink">Sign Up</Link>
                </button>
                <button className="logInBtn" onClick={handleLogInClick} displayLogIn={displayLogIn}>
                    <Link to="/login" className="headerLogInLink">Log In</Link>
                </button>
            </div>
        </header>
    )
}

export default Header;
