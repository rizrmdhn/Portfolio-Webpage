import React from "react";
import ExperienceItem from "./ExperienceItem";

function ExperienceItemList ({ experiences }) {

    return (
        <div className="Experience-list">
            {
                experiences.map((experience) => (
                    <ExperienceItem 
                    key={experience.id}
                    id={experience.id}
                    experiences={experience}
                    {...experience}/>
                ))
            }
        </div>
    )
}

export default ExperienceItemList;