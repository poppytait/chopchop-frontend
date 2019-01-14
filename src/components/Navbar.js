import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

const NAVBAR_HEIGHT = 35;

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = { navBarClass: '' };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.updateNavClass);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.updateNavClass);
  }

  updateNavClass = () => {
    if (window.scrollY > NAVBAR_HEIGHT) {
      this.setState({
        navBarClass: 'solid'
      })
    }
    else {
      this.setState({
        navBarClass: ''
      })
    }
  }

  renderIsLoggedIn = () => {
    return <div className={`loggedin-navbar ${this.state.navBarClass}`}>
      <p>username: {this.props.user.username}</p>
      <p onClick={this.props.logout}>Logout</p>
    </div>
  }

  renderIsNotLoggedIn = () => {
    return <div className="login-buttons">
      <Link to='/login'><button className="button">Login</button></Link>
      <Link to='/signup'><button className="button">Sign Up</button></Link>
    </div>
  }

  render() {
    return (
      <div>
        {this.props.isLogged ? this.renderIsLoggedIn() : this.renderIsNotLoggedIn()}
      </div>
    )
  }
}

export default withAuth(Navbar);