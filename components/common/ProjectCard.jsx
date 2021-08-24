import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import Image from "next/image";

function ProjectCard({ project }) {
    const anchorTag = useRef(null);

    const {
        title,
        url,
        description,
        technologies,
        upper_color,
        lower_color,
        showcase
    } = project;

    const style = {
        background: `linear-gradient(${upper_color} 0%, ${lower_color} 100%)`
    };

    useEffect(() => {
        const options = {
            scale: 1,
            speed: 1000,
            max: 20
        };
        const anchor = anchorTag.current;
        VanillaTilt.init(anchor, options);
    }, []);

    return (
        <a ref={anchorTag} href={url} target="_blank" rel="noreferrer" className="project-card">
            <div style={style} className="card-wrapper">
                <h1>{title}</h1>
                <h3>{description}</h3>
                {/* eslint-disable-next-line */}
                <img
                    draggable="false"
                    className="showcase d-none d-md-block"
                    src={"/images/work/" + showcase}
                    alt={title}
                />
                {technologies?.length && (
                    <div className="technologies d-flex flex-wrap align-items-start mt-4">
                        {technologies.map(
                            ({ name, image }, index) => (
                                <div
                                    key={index}
                                    className="tech d-flex align-items-center mr-2 mb-2"
                                >
                                    <div className="image">
                                        {/* eslint-disable-next-line */}
                                        <img
                                            draggable="false"
                                            src={"/images/technologies/" + image}
                                            alt={image}
                                        />
                                    </div>
                                    <span>{name}</span>
                                </div>
                            )
                        )}
                    </div>
                )}
            </div>
        </a>
    );
}

export default ProjectCard;
