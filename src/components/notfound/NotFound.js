import React from 'react'
import './NotFound.css'

// since it returns only some JSX, rather use Functional component
const NotFound = () => {
    return (
        <div className="NotFound">
            <h1>Oops! Page not Found</h1>
        </div>
    );
}

export default NotFound;