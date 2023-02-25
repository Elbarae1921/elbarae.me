import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { ProjectCard } from './common/ProjectCard';
import { FiLayers } from 'react-icons/fi';
import { SectionLayout } from './common/SectionLayout';
import { projects } from '../data/projects';

export const MyWork = () => {
  const [isMore, setIsMore] = React.useState(false);

  return (
    <SectionLayout
      classes="work d-flex flex-column align-items-center section-padding"
      id="work"
    >
      <SectionTitle text="Previous work" classes="mx-auto" />
      <div className="projects position-relative d-flex flex-wrap justify-content-center mt-5 mb-4 pt-5 w-100">
        {projects.length > 0 && isMore
          ? projects.map((p) => <ProjectCard key={p.id} project={p} />)
          : projects
              .slice(0, 2)
              .map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
      {projects.length > 2 && (
        <button
          onClick={() => setIsMore(!isMore)}
          className="btn-purple mx-auto outline d-flex align-items-center"
        >
          <span>{isMore ? 'Show less' : 'Show more'}</span>
          <div className="icon ml-2">
            <FiLayers />
          </div>
        </button>
      )}
    </SectionLayout>
  );
};
