import React, { Component } from 'react';


class RecipeCard extends Component {

    render() {
        return (
            <div>
                <div className="recipe-card">
                    <img src={this.props.image} alt='recipe' />
                    <p>{this.props.label}</p>
                    <p>Calories: {(Math.floor(this.props.calories) / this.props.yield)}</p>


                    <button className="remove-button" onClick={(event) => {
                        event.preventDefault();
                        this.props.deleteRecipe(this.props.id)
                    }
                    }>X</button>


                </div>
            </div >
        );
    }
}

export default RecipeCard;