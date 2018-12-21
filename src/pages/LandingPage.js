import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import chopchoplogo from '../chopchoplogo.png'
import { withAuth } from '../providers/AuthProvider';

class LandingPage extends Component {

    renderIsNotLoggedIn = () => {
        return <div>
            <Navbar />
            <div className="container">
                <div className="h1-and-logo">
                    <img src={chopchoplogo} alt='logo' className="centered" />
                    <h1>Chop Chop</h1>
                </div>
            </div>
        </div>
    }

    renderIsLoggedIn = () => {
        return <div>

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

export default withAuth(LandingPage);