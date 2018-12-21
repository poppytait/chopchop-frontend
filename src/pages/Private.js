import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import { Link } from 'react-router-dom'
class Private extends Component {
  render() {

    return (
      <div className="private">
        <h1>Welcome {this.props.user.username}</h1>
        <Link to='/SavedRecipes' className='private-button btnBlueGreen'>Your Favourites</Link>
        <Link to='/SearchRecipe' className='private-button btnBlueGreen'>Search ingredients</Link>
      </div>
    )
  }
}

export default withAuth(Private);
