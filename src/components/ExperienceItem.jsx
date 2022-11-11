import React from "react";

function ExperienceItem({ title, desc, year, month, place }) {

    return (
        <div className="Experience-item">
            <div className="Year">
                <p>{year}</p>
                <p>{month}</p>
            </div>
            <div className="downline">
                <div className="dot"></div>
                <div className="line"></div>
            </div>
            <h1 className="Place">{place}</h1>
            <p className="Experience">{title}</p>
            <p className="Description">{desc}</p>
        </div>
    )
}

export default ExperienceItem;