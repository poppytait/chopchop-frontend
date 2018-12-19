import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'


import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import FooterNavBar from './components/FooterNavBar';

import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SearchRecipe from './pages/SearchRecipe';
import Home from './pages/Home';
import DisplayRecipeDetail from './pages/DisplayRecipeDetail'
import SavedRecipes from './pages/SavedRecipes'
import LandingPage from './pages/LandingPage'

import chopchoplogo from './chopchoplogo.png'

import AuthProvider from './providers/AuthProvider';


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <LandingPage />
        <div>

          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            <PrivateRoute path="/searchrecipe" component={SearchRecipe} />
            <PrivateRoute path="/displayrecipedetail" component={DisplayRecipeDetail} />
            <PrivateRoute path="/savedrecipes" component={SavedRecipes} />
          </Switch>

        </div>
        <FooterNavBar />

      </AuthProvider >
    )
  }
}

export default App;
