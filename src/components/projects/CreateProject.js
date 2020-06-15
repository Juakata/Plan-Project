import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createProject } from '../../actions';

class CreateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { createProject } = this.props;
    createProject(this.state);
  }

  render() {
    const { auth } = this.props;
    console.log(auth.uid);
    if (auth.isLoaded && !auth.uid) return <Redirect to="/signin" />;
    const { title, content } = this.state;
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="title"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={title}
              />
              <label htmlFor="title">Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="content"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={content}
              />
              <label htmlFor="content">Content</label>
            </div>
          </div>
          <button type="submit" className="waves-effect waves-light btn">Create</button>
        </form>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default connect(mapStateToProps, { createProject })(CreateProject);
