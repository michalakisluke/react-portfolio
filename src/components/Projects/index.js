import React from "react";

function Projects(props) {
    return(
        <div className="sub-proj-link">
            <a href={props.link} target="_blank">
                <section className="sub-proj">
                    <div className="sub-proj-description">
                        <h4>
                            {props.title}
                        </h4>
                        <p>
                            {props.description}
                        </p>
                    </div>
                </section>
            </a>
        </div>
    )
}

export default Projects;