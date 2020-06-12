import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const ProjectDetail = ({ project }) => {
  if(project) {
    return (
      <div className="section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              {`Posted by ${project.authorFirstName} ${project.authorLastName}`}
            </div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      Loading project...
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { projects } = state.firestore.data;
  const project = projects ? projects[id] : null;
  return {
    project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' },
  ]),
)(ProjectDetail);
