import React, { Component } from 'react';


class RecipeCard extends Component {

    componentDidMount() {
        console.log(this.props)

    }


    render() {
        return (
            <div>
                <div className="recipe-card">
                    <img src={this.props.image} alt='recipe' />
                    <p>{this.props.label}</p>
                    <p>{this.props.calories}</p>


                    <button className="button" onClick={(event) => {
                        event.preventDefault();
                        this.props.deleteRecipe(this.props.id)
                    }
                    }>Remove from Favourites</button>


                </div>
            </div >
        );
    }
}

export default RecipeCard;