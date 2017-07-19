import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Manager</Link>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}