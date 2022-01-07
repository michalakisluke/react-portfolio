import React from "react";

function Nav(props) {

    const {
        currentNav,
        setCurrentNav
    } = props;

    function displayNav() {
        console.log(currentNav);
    };

    return(
        <header>
            <h2>
                Luke Michalakis
            </h2>    
            <nav>
                <ul>
                    <li>
                        <a href="#about-me" onClick={() => { setCurrentNav('about-me'); displayNav();}}>About</a>    
                    </li>
                    <li>
                        <a href="#projects" onClick={() => { setCurrentNav('portfolio'); displayNav();}}>Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => { setCurrentNav('contact'); displayNav();}}>Contact</a>
                    </li>
                    <li>
                        <a href="#resume" onClick={() => { setCurrentNav('resume'); displayNav();}}>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;