// components/Atom/profile-section/index.js

import React from "react";

const AtomProfileSection = ({ title, content }) => {
    return (
        <div>
            <h2>{title}</h2>
            {content.type === "introduction" && <p>{content.introduction}</p>}
            {content.type === "experience" && (
                <div>
                {content.experience.map((exp, index) => (
                  <div key={index}>
                    <span>{exp.position} {exp.company} {exp.period}</span>
                  </div>
                ))}
              </div>
            )}
            {content.type === "education" && (
                <div>
                    {content.education.map((edu, index) => (
                    <div key={index}>
                        <span>{edu.school} ({edu.period})</span>
                    </div>
                    ))}
                </div>
            )}
            {content.type === "certificate" && (
                <div>
                    {content.certificates.map((cert, index) => (
                    <div key={index}>
                        <span>{cert}</span>
                    </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AtomProfileSection;