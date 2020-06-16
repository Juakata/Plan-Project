import React from 'react';

const ProjectSummary = ({title, author, time}) => (
  <div className="card z-depth-0 project-summary">
    <div className="card-title">{title}</div>
    <p>Posted by {author}</p>
    <p className="grey-text">{time}</p>
  </div>
);

export default ProjectSummary;
