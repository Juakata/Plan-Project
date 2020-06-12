import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
  return (
    <div className="project-list section">
      <ProjectSummary
        title="My First Project"
        author="Andoni"
        time="3rd September, 2am"
      />
    </div>
  );
}

export default ProjectList;
