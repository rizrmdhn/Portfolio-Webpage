import React from "react";

function Header() {


    return (
        <div id="Header" className="Header">
            <nav id="navbar" className="nav">
                <ul className="nav-list">
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                       <a href="/Project">Work</a> 
                    </li>
                    <li>
                        <a href="/Experience">Experience</a>
                    </li>
                    <li>
                        <a href="/Social">Social</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;