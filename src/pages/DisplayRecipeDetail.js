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
        // const item = this.props.location.state.item
        this.setState(this.props.location.state);
        const { recipe } = this.props.location.state
        //const  recipe  = this.props.location.state.recipe
        console.log(recipe)
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
            <div>
                <h1>Recipe Detail</h1>
                <p>{recipe.label}</p>
                <p>{ingredients}</p>
                <p>Protein: {Math.floor(recipe.totalNutrients.PROCNT.quantity)}g</p>

                <button onClick={this.handleSubmit} className="button is-success" type="submit">
                    {this.state.title}</button>
            </div>
        );
    }
}

export default DisplayRecipeDetail;