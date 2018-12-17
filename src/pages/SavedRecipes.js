import React, { Component } from 'react';
import FavouritesService from '../lib/FavouritesService';
import { withAuth } from '../providers/AuthProvider'

class Profile extends Component {

    state = {
        item: {
            recipe: {
                label: '',
            }
        }
    }

    componentDidMount() {
        // const userId = this.props.user._id;
        // const item = this.state.item;

        FavouritesService.getRecipes()
            .then((recipe) => {
                console.log(recipe);
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                {this.state.item.recipe.label}

            </div>
        );
    }
}

export default withAuth(Profile);

// profile in brackets because youre passing props of profile via auth provider component