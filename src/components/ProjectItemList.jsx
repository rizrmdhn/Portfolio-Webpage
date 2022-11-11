import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectItemList ({ projects, title }) {

    return (
        <div className="Project-list">
            {
                projects.map((project) => (
                    <ProjectItem 
                    key={project.id}
                    id={project.id}
                    projects={project}
                    {...project}/>
                ))
            }
        </div>
    )
}

export default ProjectItemList;