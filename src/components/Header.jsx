import ThemeBar from "./ThemeBar";

const Header = ( {mode, setMode} ) => {

    const handleToggleTheme = () => {
        setMode(prevTheme => !prevTheme);
      };

    return (
        <header>
            <ThemeBar handleToggleTheme={handleToggleTheme} mode={mode} />
            <div>
                <button className="signUpBtn">Sign Up</button>
                <button className="logInBtn">Log In</button>
            </div>
        </header>
    )
}

export default Header;