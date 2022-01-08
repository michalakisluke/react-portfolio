import React from "react";
import resume from "../../assets/pictures/resume.jpg";
import resumePdf from "../../assets/resume/resume.pdf";

function Resume() {
    return(
        <section className="content-section" id="resume">
            <img src={resume} alt="Luke's Resume"/>
            <a href={resumePdf} download>Download me!</a>
            <h2>
                Other Relevant Skills
            </h2>
            <p>
                Project Management, Version Control (Git), Hardware Design and Implementation
            </p>
        </section>
    )
}

export default Resume;