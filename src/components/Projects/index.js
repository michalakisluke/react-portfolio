import React from "react";

function Projects(props) {
    const divStyle = {
        backgroundImage: `url(${props.image})`
    };

    return(
        // fka main-proj-link
        <div className="proj-link">
            <a href={props.link} target="_blank">
                {/* fka main */}
                <section className="proj"  style={divStyle}>
                    {/* fka main-proj-desc */}
                    <div className="proj-description">
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