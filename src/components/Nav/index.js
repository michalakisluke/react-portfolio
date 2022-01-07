import React from "react";

function Nav(props) {

    const {
        nav = [],
        currentNav,
        setCurrentNav
    } = props

    return(
        <header>
            <h2>
                Luke Michalakis
            </h2>    
            <nav>
                <ul>
                    <li>
                        <a href="#about-me" onClick={() => setCurrentNav(nav)}>About</a>    
                    </li>
                    <li>
                        <a href="#projects" onClick={() => setCurrentNav(nav)}>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => setCurrentNav(nav)}>Contact</a>
                    </li>
                    <li>
                        <a href="#resume" onClick={() => setCurrentNav(nav)}>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;