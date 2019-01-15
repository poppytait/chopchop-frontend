import React, { Component } from 'react';
import FavouritesService from '../lib/FavouritesService';

class DisplayRecipeDetail extends Component {

    state = {
        recipe: {
            label: '',
            healthLabels: [],
            ingredientLines: [],
            totalNutrients: {
                ENERC_KCAL: {
                    quantity: '',
                    unit: ''
                },
                PROCNT: {
                    label: '',
                    quantity: '',
                    unit: ''
                }
            }
        },
        title: "Add to favourites",
    }

    componentDidMount() {
        this.setState(this.props.location.state);
    }

    handleSubmit = event => {
        event.preventDefault();
        FavouritesService.saveRecipe(this.state.recipe)
            .then((alert('added to favourites')));
        this.setState({ title: "Saved to favourites" })
    }

    render() {
        const recipe = this.state.recipe

        const ingredients = recipe.ingredientLines.map((item, i) => {
            return <li key={i}>
                {item}
            </li>
        })

        return (
            <div className="displayrecipedetail">
                <div className="recipe-card">
                    <h1>{recipe.label}</h1>
                    <p>{ingredients}</p>
                    <p>Protein: {Math.floor(recipe.totalNutrients.PROCNT.quantity)}g</p>
                    <p><a href={recipe.url} target="_blank">Source</a></p>

                    <button onClick={this.handleSubmit} className="button-fav" type="submit">
                        {this.state.title}</button>
                </div>
            </div>
        );
    }
}

export default DisplayRecipeDetail;