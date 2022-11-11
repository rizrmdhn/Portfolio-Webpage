import React from "react";
import { CardGroup } from "reactstrap";
import ProjectItemList from "./ProjectItemList";

function ProjectCard ({ projects }) {

    return (
        <CardGroup>
            <ProjectItemList projects={projects} />
        </CardGroup>
    )
}

export default ProjectCard;