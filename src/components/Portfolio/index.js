import React from "react";
import Project from "../Projects";

function Portfolio() {
    const proj = [
        {
            title: 'README Generator',
            description: 'Built with Node.js, this application utilizes the inquirer pacakge to generate a README based on user input, and can be used to generate neat, consistent README files for project deployment',
            link: 'https://github.com/michalakisluke/README-Generator'
        },
        {
            title: 'E-Commerce Backend',
            description: 'Built with Node.js, this application utilizes the inquirer pacakge to generate a README based on user input, and can be used to generate neat, consistent README files for project deployment',
            link: 'https://github.com/michalakisluke/E-Commerce-Backend'
        },
        {
            title: 'NoSQL Social Network API',
            description: 'Built with MongoDB and Express, this application forms the backend of a social media site, allowing users to create a profile, add friends, post thoughts, and react to the thoughts of others',
            link: 'https://github.com/michalakisluke/NoSQL-Social-Network-API'
        },
        {
            title: 'PWA Budget Tracker',
            description: 'This progressive web application uses Express and MongoDB to create a budget tracker application that works both with and without internet connection, allowing users to manage their own finances',
            link: 'https://young-bayou-29277.herokuapp.com/'
        },
        {
            title: 'GTHO v2 - Travel App',
            description: "A full stack flight finder application, GTHO was refactored from it's original form to a fully comprehensive application in order to allow for a user to record and review their previously generated trips, while seeing how other users felt about the destination.",
            link: 'https://floating-wave-98179.herokuapp.com/'
        },
        {
            title: 'Employee Tracker',
            description: 'This project allows the user to track and modify their companies roles, employees and departments tables within a MySQL database, and can be used directly in the command terminal',
            link: 'https://github.com/michalakisluke/Employee-Tracker'
        }
    ]

    return (
        <section>
            {proj.map((title, description, link) => {
                <Project 
                    title={title}
                    description={description}
                    link={link}
                    key={title}
                />
            })}
        </section>
    );
}

export default Portfolio;