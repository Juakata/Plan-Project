import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { signIn } = this.props;
    signIn(this.state);
  }

  render() {
    const { email, password } = this.state;
    const { authError } = this.props;
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                onChange={this.handleChange}
                value={email}
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
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="red-text center">
            { authError ? <p>{authError}</p> : null }
          </div>
          <button type="submit" className="waves-effect waves-light btn">
            Sign In
          </button>
        </form>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  authError: state.auth.authError,
});

export default connect(mapStateToProps, { signIn })(SignIn);
