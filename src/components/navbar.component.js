import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark-bg-dark navbar-expand-lg" >
                <Link to="/" className="navbar-brand" >ExerTracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create user</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/users/list" className="nav-link">List user</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}