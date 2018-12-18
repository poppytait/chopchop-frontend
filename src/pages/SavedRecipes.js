import React, { Component } from 'react';
import FavouritesService from '../lib/FavouritesService';
import { withAuth } from '../providers/AuthProvider'
import RecipeCard from '../components/RecipeCard'
import { Link } from 'react-router-dom'

class SavedRecipes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favourites: [],
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    componentDidMount() {
        FavouritesService.getRecipes()
            .then((recipe) => {
                console.log(recipe)
                this.setState({
                    favourites: recipe.data.favourites,
                });

            })
            .catch(error => console.log(error))
    }

    deleteRecipe(recipeID) {
        FavouritesService.deleteRecipe(recipeID)
            .then((data) => {
                const favouriteIDs = data.favourites
                this.setState({
                    favourites: this.state.favourites.filter((favourite) => {
                        return favouriteIDs.includes(favourite._id)
                    })
                });
            })
            .catch(error => console.log(error))
    }

    render() {
        const { favourites } = this.state

        return (
            <div>
                {favourites.map((favourite) => {
                    console.log(favourite)
                    return <Link to={{
                        pathname: '/displayrecipedetail',
                        state: {
                            recipe: favourite
                        }
                    }}>
                        <RecipeCard className="recipe-card"
                            key={favourite._id}
                            id={favourite._id}
                            image={favourite.image}
                            calories={favourite.calories}
                            label={favourite.label}
                            deleteRecipe={this.deleteRecipe} />
                    </Link>
                })}
            </div>
        )
    }

};

export default withAuth(SavedRecipes);