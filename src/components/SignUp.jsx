const SignUp = () => {
    return (
        <div className="signUpPage">
            <div className="formContainer">
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="text">Email:</label>
                    <input type="text" required></input>
                    <label htmlFor="password">Password:</label>
                    <input type="password" required></input>
                    <label htmlFor="password">Confirm Password:</label>
                    <input type="password" required></input>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;

