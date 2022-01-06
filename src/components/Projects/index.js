import React from "react";

function Projects() {
    return(
        <section className="project" id="project-content">
            <h2>
                Projects
            </h2>
            <div className="main-proj-link">
                <a href="https://floating-wave-98179.herokuapp.com/" target="_blank">
                    <div className="main">
                        <div className="main-proj-description">
                            <h3>
                                GTHO v2 - Travel App
                            </h3>
                            <p>
                                A full stack flight finder application, GTHO was refactored from it's original, front end only, form 
                                to allow for a user to record and review their previously generated trips, while seeing how other users felt about the destination.
                            </p>
                        </div>
                    </div>
                </a>
            </div>    
            <div className="sub">
                <div className="sub-proj-1-link">
                    <a href="https://github.com/michalakisluke/README-Generator" target="_blank">
                        <section className="sub-proj-1">
                            <div className="sub-proj-description">
                                <h4>
                                    README Generator
                                </h4>
                                <p>
                                    This application utilizes inquirer to generate a README based on user input
                                </p>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="sub-proj-2-link">
                    <a href="https://github.com/michalakisluke/E-Commerce-Backend" target="_blank">
                        <section className="sub-proj-2">
                            <div className="sub-proj-description">
                                <h4>
                                    E-Commerce Backend
                                </h4>
                                <p>
                                    Utilizing MySQL, this application lets the user to read and modify a database for a basic, e-commerce website,
                                    allowing for updating of prices, item quantities, and more
                                </p>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="sub-proj-3-link">
                    <a href="https://github.com/michalakisluke/NoSQL-Social-Network-API" target="_blank">
                        <section className="sub-proj-3">
                            <div className="sub-proj-description">
                                <h4>
                                    NoSQL Social Network API
                                </h4>
                                <p>
                                    Built with MongoDB and Express, this application forms the backend of a social media site, allowing users to create a profile,
                                    add friends, post thoughts, and react to the thoughts of others
                                </p>
                            </div>
                        </section>
                    </a>
                </div>
                <div className="sub-proj-4-link">
                    <a href="https://young-bayou-29277.herokuapp.com/" target="_blank">
                        <section className="sub-proj-4">
                            <div className="sub-proj-description">
                                <h4>
                                    PWA Budget Tracker
                                </h4>
                                <p>
                                    This progressive web application uses Express and MongoDB to create a budget tracker application that works both 
                                    with and without internet connection, allowing users to manage their own finances
                                </p>
                            </div>
                        </section>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects;