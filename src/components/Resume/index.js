import React from "react";
import resume from "../../assets/pictures/resume.jpg";

function Resume() {
    return(
        <section className="content-section" id="resume">
            <img src={resume} alt="Luke's Resume"/>
            <h2>
                Skills
            </h2>
            <p>
                JavaScript, HTML, CSS, React, Node.js, Express.js, MongoDB, MySQL
            </p>
        </section>
    )
}

export default Resume;