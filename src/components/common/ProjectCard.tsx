import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { Project } from 'types/Project';
import Image from 'next/image';

export interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const anchorTag = useRef<HTMLAnchorElement>(null);

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
    if (anchor != null) {
      VanillaTilt.init(anchor, options);
    }
  }, []);

  return (
    <a
      ref={anchorTag}
      href={url}
      target="_blank"
      rel="noreferrer"
      className="project-card"
    >
      <div style={style} className="card-wrapper">
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div className="showcase d-none d-md-block">
          <div className="w-100 h-100 position-relative">
            <Image
              draggable="false"
              src={'/images/work/' + showcase}
              alt={title}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        {technologies?.length && (
          <div className="technologies d-flex flex-wrap align-items-start mt-4">
            {technologies.map(({ name, image }, index) => (
              <div
                key={index}
                className="tech d-flex align-items-center mr-2 mb-2"
              >
                <div className="image">
                  <Image
                    draggable="false"
                    src={'/images/technologies/' + image}
                    alt={image}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <span>{name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};
