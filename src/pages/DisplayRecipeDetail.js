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
                <h1>Recipe Detail</h1>
                <p><strong>{recipe.label}</strong></p>
                <p>{ingredients}</p>
                <p>Protein: {Math.floor(recipe.totalNutrients.PROCNT.quantity)}g</p>

                <button onClick={this.handleSubmit} className="button-fav" type="submit">
                    {this.state.title}</button>



            </div>
        );
    }
}

export default DisplayRecipeDetail;