import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecipeListItem from '../components/RecipeListItem'
// import DisplayRecipeDetail from '../components/DisplayRecipeDetail'
// import EdamamService from '../lib/EdamamService'

class RecipeList extends Component {

    state = {
        recipes: [],
        error: false,
        isLoading: true,
        hideRecipeDetail: true,
    }

    componentDidMount() {
        console.log(this.context);
    }

    componentWillUnmount() {
        console.log("i'm dying!!!")
    }

    render() {

        const recipes = this.props.recipesList.map((item, i) => {
            return <li key={i}>  
                <RecipeListItem item={item}/>
            </li>
        })

        return (
            <div>
                <ul>
                    {recipes}
                </ul>
            </div>
        );
    }
}

export default RecipeList;
