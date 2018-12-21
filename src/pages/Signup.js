import React, { Component } from 'react';
import auth from '../lib/AuthService';
import { withAuth } from '../providers/AuthProvider';

class Signup extends Component {

  state = {
    username: "",
    password: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    auth.signup({ username, password })
      .then((user) => {
        this.setState({
          username: "",
          password: "",
        });
        this.props.setUser(user)
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="signup">
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <input className="input" placeholder="Username" type="text" name="username" value={username} onChange={this.handleChange} />
          </div>

          <div className="field">
            <input className="input" type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success" input type="submit" value="Signup">
                Sign Up </button>
            </p>
          </div>
        </form>

        {/* <p className="p-signup">Already have account?
          <Link to={"/login"}><u>Login</u></Link>
        </p> */}

      </div >
    )
  }
}

export default withAuth(Signup);