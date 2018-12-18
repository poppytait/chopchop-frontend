import React, { Component } from 'react';
import { Link } from "react-router-dom";

class RecipeListItem extends Component {

    render() {


        return (
            <div>
                <Link to={{
                    pathname: '/displayrecipedetail',
                    state: {
                        recipe: this.props.item.recipe,
                    }
                }}> {this.props.item.recipe.label}</Link>

            </div>
        );
    }
}

export default RecipeListItem;

