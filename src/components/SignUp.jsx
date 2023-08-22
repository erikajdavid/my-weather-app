import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="signUpPage">
            <div className="formContainer">
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" required></input>
                    <label htmlFor="password">Password:</label>
                    <div className="passwordContainer">
                        <input type="password" name="password" className="password" required></input>
                        <i class="fa-regular fa-eye-slash faInvisible"></i>
                    </div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <div className="passwordContainer">
                        <input type="password" name="confirmPassword" className="password" required></input>
                        <i class="fa-regular fa-eye-slash faInvisible"></i>
                    </div>
                    <button type="submit">Get Started</button>
                </form>
                <p>Already have an account? <Link to="/login">Log in.</Link></p>
            </div>
        </div>
    )
}

export default SignUp;

