import React, { Component } from 'react';
import auth from '../lib/AuthService';
import { withAuth } from '../providers/AuthProvider';
import '../style.css'

class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    auth.login({ username, password })
      .then((user) => {
        this.props.setUser(user);
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
      <div>

        {/* <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange} />
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />
          <input type="submit" value="Login" />
        </form> */}


        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="username" placeholder="Username" name="username" value={username} onChange={this.handleChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>

          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success" type="submit" value="Login">
                Login </button>
            </p>
          </div>
        </form>

      </div>
    )
  }
}

export default withAuth(Login);