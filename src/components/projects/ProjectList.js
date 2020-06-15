import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <ProjectSummary
            title={project.title}
            author="Andoni"
            time="3rd September, 2am"
          />
        </Link>
      ))}
    </div>
  );
}

export default ProjectList;
