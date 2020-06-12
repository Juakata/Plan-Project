import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ProjectList from '../projects/ProjectList';

const Dashboard = ({ projects }) => (
  <div>
    {console.log(projects)}
    <ProjectList projects={projects}/>
  </div>
);

const mapStateToProps = state => ({
  projects: state.firestore.ordered.projects,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' },
  ]),
)(Dashboard);
