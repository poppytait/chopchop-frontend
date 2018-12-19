import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import chopchoplogo from '../chopchoplogo.png'
import { withAuth } from '../providers/AuthProvider';


class FooterNavBar extends Component {

    renderIsLoggedIn = () => {
        return <div>
            <footer>
                <Link to='/'>
                    <div className="footer-img">
                        <img src={chopchoplogo} alt='logo' />
                    </div></Link>
                <Link to='/searchrecipe'>
                    <div className="footer-img">
                        <i class="fas fa-search"></i>
                    </div></Link>
                <Link to='/savedrecipes'>
                    <div className="footer-img">
                        <i class="fas fa-heart"></i>
                    </div></Link>
            </footer>
        </div>
    }

    renderIsNotLoggedIn = () => {
        return <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </div>
    }

    render() {
        return (
            <div>
                {this.props.isLogged ? this.renderIsLoggedIn() : this.renderIsNotLoggedIn()}
            </div>
        );
    }
}

export default withAuth(FooterNavBar);