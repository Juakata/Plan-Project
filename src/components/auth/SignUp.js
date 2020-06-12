import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeat: '',
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
    const {
      firstName, lastName, email, password, repeat,
    } = this.state;
    return (
      <div className="row">
        <form autoComplete="off" className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="firstName"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={firstName}
              />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                id="lastName"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={lastName}
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                onChange={this.handleChange}
                value={email}
                autoComplete="off"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate"
                onChange={this.handleChange}
                value={password}
                autoComplete="off"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="repeat"
                type="password"
                className="validate"
                onChange={this.handleChange}
                value={repeat}
              />
              <label htmlFor="repeat">Password</label>
            </div>
          </div>
          <button type="submit" className="waves-effect waves-light btn">Create</button>
        </form>
      </div>
    );
  };
}

export default SignUp;
