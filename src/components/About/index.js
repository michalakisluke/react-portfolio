import React from "react";
import pic from "../../assets/pictures/LM_at_italian.jpg";

function About() {
    return (
        <section className="content-section" id="about-me">
            <div id="about-me-image">
                <img src={pic} alt="Luke enjoying tiramisu at Via Carota"/>
            </div>
            <div id="about-me-text">
                <h2>About Me</h2>
                <p>
                    My name is Luke Michalakis, and I am a web developer from Long Island - New York. 
                    After graduating from the University at Buffalo in 2019 with an Electrical Engineering degree, 
                    I worked for one of the largest contractors in North America, across many projects in the New York City 
                    area. After a few years in construction, I realized I wanted to get back to what I enjoyed during college, 
                    and began my journey to become a full stack web developer.
                </p>
            </div>
        </section>
    );
}

export default About;