import React from "react";
import { Link } from "react-router-dom";

function Header() {


    return (
        <div id="Header" className="Header">
            <nav id="navbar" className="nav">
                <ul className="nav-list">
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                       <Link to="/Project">Work</Link>
                    </li>
                    <li>
                        <Link to="/Experience">Experience</Link>
                    </li>
                    <li>
                        <Link to="/Social">Social</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;