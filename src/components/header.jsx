import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" stylename="-webkit-app-region: drag">
            <span className="navbar-brand">Interval Timer</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className='nav-item' data-toggle="collapse" data-target="#navbarCollapse.show">
                        <Link className="nav-link" to="/timer">Timer</Link>
                    </li>
                    <li className='nav-item' data-toggle="collapse" data-target="#navbarCollapse.show">
                        <Link className="nav-link" to="/counter">Counter</Link>
                    </li>
                    <li className='nav-item' data-toggle="collapse" data-target="#navbarCollapse.show">
                        <Link className="nav-link" to="/placeholder">Placeholder</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default withRouter(connect()(Header));