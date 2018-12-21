import React, { Component } from 'react';
import { Link } from "react-router-dom";

class RecipeListItem extends Component {

    render() {


        return (
            <div className="recipe-card">
                <Link to={{
                    pathname: '/displayrecipedetail',
                    state: {
                        recipe: this.props.item.recipe,
                    }
                }}>
                    <img src={this.props.item.recipe.image} alt="this recipe" />
                    {this.props.item.recipe.label}</Link>

            </div>
        );
    }
}

export default RecipeListItem;

