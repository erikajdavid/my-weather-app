import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className="signUpPage">
            <div className="formContainer">
                <h2>Log In</h2>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" required></input>
                    <label htmlFor="password">Password:</label>
                    <div className="passwordContainer">
                        <input type="password" name="password" className="password" required></input>
                        <i class="fa-regular fa-eye-slash faInvisible"></i>
                    </div>
                    <button type="submit">Log In</button>
                </form>
                <p>Don't have an account? <Link to="/login">Sign up here.</Link></p>
            </div>
        </div>
    )
}

export default LogIn;
