import ThemeBar from "./ThemeBar";

const Header = ( {mode, setMode} ) => {

    const handleToggleTheme = () => {
        setMode(prevTheme => !prevTheme);
      };

    return (
        <header>
            <ThemeBar handleToggleTheme={handleToggleTheme} mode={mode} />
            <div>
                <button>Sign Up</button>
                <button>Log In</button>
            </div>
        </header>
    )
}

export default Header;