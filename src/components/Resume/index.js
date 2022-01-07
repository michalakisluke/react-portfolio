import React from "react";
import resume from "../../assets/resume/resume.pdf";

function Resume() {
    return(
        <section className="content-section" id="resume">
            <embed src={resume}/>
        </section>
    )
}

export default Resume;