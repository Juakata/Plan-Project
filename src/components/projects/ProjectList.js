import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <ProjectSummary
            title={project.title}
            author={`${project.authorFirstName} ${project.authorLastName}`}
            time={moment(project.createdAt.toDate()).calendar()}
          />
        </Link>
      ))}
    </div>
  );
}

export default ProjectList;
