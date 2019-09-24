import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

// since it returns only some JSX, rather use Functional component
const NotFound = () => {
    return (
        <div className="NotFound">
            <h1 className="NotFound-title">Oops! Page not Found</h1>
            <Link to='/' className="NotFound-link">Got to Homepage</Link>
        </div>
    );
}

export default NotFound;