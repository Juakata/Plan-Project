import React from 'react';

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
    console.log(this.state);
  }

  render() {
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

export default CreateProject;
