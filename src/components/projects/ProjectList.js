import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => (
        <ProjectSummary
          key={project.id}
          title={project.title}
          author="Andoni"
          time="3rd September, 2am"
        />
      ))}
    </div>
  );
}

export default ProjectList;
