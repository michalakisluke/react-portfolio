import React from "react";

function Projects() {
    return(
        <section className="content-section" id="projects">
            <h2>
                Projects
            </h2> 
            <div className="sub-proj-1-link">
                <a href="https://github.com/michalakisluke/README-Generator" target="_blank">
                    <section className="sub-proj-1">
                        <div className="sub-proj-description">
                            <h4>
                                README Generator
                            </h4>
                            <p>
                                Built with Node.js, this application utilizes the inquirer pacakge to generate a README based on user input, and can be used 
                                to generate neat, consistent README files for project deployment
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
            <div className="sub-proj-5-link">
                <a href="https://floating-wave-98179.herokuapp.com/" target="_blank">
                    <section className="sub-proj-5">
                        <div className="sub-proj-description">
                            <h4>
                                GTHO v2 - Travel App 
                            </h4>
                            <p>
                                A full stack flight finder application, GTHO was refactored from it's original form to a fully comprehensive application in order 
                                to allow for a user to record and review their previously generated trips, while seeing how other users felt about the destination.
                            </p>
                        </div>
                    </section>
                </a>
            </div>
            <div className="sub-proj-6-link">
                <a href="" target="_blank">
                    <section className="sub-proj-6">
                        <div className="sub-proj-description">
                            <h4>
                                Employee Tracker
                            </h4>
                            <p>
                                This project allows the user to track and modify their companies roles, employees and departments tables within a MySQL database, and 
                                can be used directly in the command terminal
                            </p>
                        </div>
                    </section>
                </a>
            </div>
        </section>
    )
}

export default Projects;