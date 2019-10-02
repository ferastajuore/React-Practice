import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h3 className="not-found__header">404</h3>
            <p className="not-found__paragraph">Not Found</p>
            <Link to="/users" className="not-found__link">Home</Link>
        </div>
    )
}

export default NotFound;
