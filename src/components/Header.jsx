import React from 'react';
import { Link } from 'react-router-dom';
import ThemeBar from "./ThemeBar";

const Header = ({ mode, setMode, displaySignUp, handleSignUpClick }) => {

    const handleToggleTheme = () => {
        setMode(prevTheme => !prevTheme);
    };

    return (
        <header>
            <ThemeBar handleToggleTheme={handleToggleTheme} mode={mode} />
            <div className="buttonContainer">
                <button className="signUpBtn" onClick={handleSignUpClick} displaySign={displaySignUp}>
                    <Link to="/signup">Sign Up</Link>
                </button>
                <button className="logInBtn">
                    <Link to="/login">Log In</Link>
                </button>
            </div>
        </header>
    )
}

export default Header;
