import React from 'react';
import { connect } from 'react-redux';
import ProjectList from '../projects/ProjectList';

const Dashboard = ({ projects }) => (
  <div>
    <ProjectList projects={projects}/>
  </div>
);

const mapStateToProps = state => ({
  projects: state.project.projects,
});

export default connect(mapStateToProps)(Dashboard);
