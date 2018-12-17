import React, { Component } from 'react';
import FavouritesService from '../lib/FavouritesService';

class DisplayRecipeDetail extends Component {

    state = {
        item: {
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
            }
        },
        title: "Add to favourites",
    }

    componentDidMount() {
        // const item = this.props.location.state.item
        this.setState(this.props.location.state);
        const { item } = this.props.location.state
        console.log(item)
    }

    handleSubmit = event => {
        event.preventDefault();
        FavouritesService.saveRecipe(this.state.item.recipe)
            .then((alert('added to favourites')));
        this.setState({ title: "Saved to favourites" })

    }

    render() {
        const recipe = this.state.item.recipe

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
                <p>{recipe.totalNutrients.PROCNT.quantity}</p>

                <button onClick={this.handleSubmit} className="button is-success" type="submit">
                    {this.state.title}</button>
            </div>
        );
    }
}

export default DisplayRecipeDetail;