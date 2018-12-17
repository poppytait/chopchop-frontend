import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'


import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';


import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SearchRecipe from './pages/SearchRecipe';
import Home from './pages/Home';
import DisplayRecipeDetail from './pages/DisplayRecipeDetail'
import Profile from './pages/Profile'

import AuthProvider from './providers/AuthProvider';


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <h1>Chop Chop</h1>

          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            <PrivateRoute path="/searchrecipe" component={SearchRecipe} />
            <PrivateRoute path="/displayrecipedetail" component={DisplayRecipeDetail} />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
