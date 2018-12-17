import React, { Component } from 'react';
import { Link } from "react-router-dom";

class RecipeListItem extends Component {

    render() {


        return (
            <div>
            <Link to ={{
                pathname: '/displayrecipedetail',
                state: {
                    item: this.props.item,
                }
            }}> {this.props.item.recipe.label}</Link>

            </div>
        );
    }
}

export default RecipeListItem;

