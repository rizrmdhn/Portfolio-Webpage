import React from "react";

function ProjectItem({ title, img, src, stk1, stk2 }) {

    return (
        <div className="Project-item">
            <a
                href={src}
                target="_blank"
                rel="noreferrer"
                className="Project-item"
            >
                <img className="Project-image" src={img} alt={title} />
                <div className="Stack">
                    <p>{stk1}</p>
                    <p>{stk2}</p>
                </div>
                <p className="Project-title">{title}</p>
            </a>
        </div>
    )
}

export default ProjectItem;