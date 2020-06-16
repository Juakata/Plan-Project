import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../actions';

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
    const { signUp } = this.props;
    signUp(this.state);
  }

  render() {
    const {
      firstName, lastName, email, password, repeat,
    } = this.state;
    const { auth, authError } = this.props;
    if (auth.isLoaded && auth.uid) return <Redirect to="/" />;
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
              <label htmlFor="repeat">Repeat Password</label>
            </div>
          </div>
          <div className="red-text center">
            { authError ? <p>{authError}</p> : null }
          </div>
          <button type="submit" className="waves-effect waves-light btn">
            Sign Up
          </button>
        </form>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  authError: state.auth.authError,
});

export default connect(mapStateToProps, { signUp })(SignUp);
