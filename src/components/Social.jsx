import React from "react";

function Social () {

    return (
        <div className="Social">
            <div className="contact">
                <a
                    id="profile-link"
                    href="https://github.com/rizrmdhn"
                    target="_blank"
                    rel="noreferrer"
                    className="btn contact-details"
                    ><i className="fab fa-github"></i> GitHub</a>
                <a
                    id="profile-link"
                    href="https://twitter.com/AzzezEd"
                    target="_blank"
                    rel="noreferrer"
                    className="btn contact-details"
                    ><i className="fab fa-twitter"></i> Twitter</a>

            </div>
        </div>
    )
}

export default Social;