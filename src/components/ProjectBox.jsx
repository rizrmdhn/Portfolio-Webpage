import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectBox ({ projects, title, desc, img}) {

    return (
        <div id="Project-box" className="Project-box">
            <h2 className="Project-header">These are some of my projects</h2>
            <ProjectCard projects={projects}/>
        </div>
    )
}

export default ProjectBox;