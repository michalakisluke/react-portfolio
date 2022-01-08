import React from "react";
import Project from "../Projects";
import readme from "../../assets/pictures/readme.JPG";
import commerce from "../../assets/pictures/money.jpg";
import network from "../../assets/pictures/friends.jpg";
import budget from "../../assets/pictures/budget.JPG";
import gtho from "../../assets/pictures/gthov2.JPG";
import employees from "../../assets/pictures/employees.jpg"


function Portfolio() {
    const proj = [
        {
            title: 'README Generator',
            description: 'Built with Node.js, this application utilizes the inquirer pacakge to generate a README based on user input, and can be used to generate neat, consistent README files for project deployment',
            link: 'https://github.com/michalakisluke/README-Generator',
            image: readme
        },
        {
            title: 'E-Commerce Backend',
            description: 'Built with Node.js, this application utilizes the inquirer pacakge to generate a README based on user input, and can be used to generate neat, consistent README files for project deployment',
            link: 'https://github.com/michalakisluke/E-Commerce-Backend',
            image: commerce
        },
        {
            title: 'NoSQL Social Network API',
            description: 'Built with MongoDB and Express, this application forms the backend of a social media site, allowing users to create a profile, add friends, post thoughts, and react to the thoughts of others',
            link: 'https://github.com/michalakisluke/NoSQL-Social-Network-API',
            image: network
        },
        {
            title: 'PWA Budget Tracker',
            description: 'This progressive web application uses Express and MongoDB to create a budget tracker application that works both with and without internet connection, allowing users to manage their own finances',
            link: 'https://young-bayou-29277.herokuapp.com/',
            image: budget
        },
        {
            title: 'GTHO v2 - Travel App',
            description: "A full stack flight finder application, GTHO was refactored from it's original form to a fully comprehensive application in order to allow for a user to record and review their previously generated trips, while seeing how other users felt about the destination",
            link: 'https://floating-wave-98179.herokuapp.com/',
            image: gtho
        },
        {
            title: 'Employee Tracker',
            description: 'This project allows the user to track and modify their companies roles, employees and departments tables within a MySQL database, and can be used directly in the command terminal',
            link: 'https://github.com/michalakisluke/Employee-Tracker',
            image: employees
        }
    ];

    return (
        <section className="portfolio">
            {proj.map((data) => {
                return <Project 
                        title={data.title}
                        description={data.description}
                        link={data.link}
                        image={data.image}
                        key={data.title}
                    />
            })}
        </section>
    );
}

export default Portfolio;