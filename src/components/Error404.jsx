import { Link } from 'react-router-dom'; 

const Error404 = () => {

    return (

        <div className="error404Container">
            <h1>404</h1>
            <p>Oops! Something went wrong. Try again later.</p>
            <Link to="/" className="returnHomeLink404">Return home</Link>
        </div>
    );

}

export default Error404;