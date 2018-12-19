import React, { Component } from 'react';
import RecipeListItem from '../components/RecipeListItem'
// import DisplayRecipeDetail from '../components/DisplayRecipeDetail'
// import EdamamService from '../lib/EdamamService'
import RecipeCard from '../components/RecipeCard'

class RecipeList extends Component {

  state = {
    recipes: [],
    error: false,
    isLoading: true,
    hideRecipeDetail: true,
  }

  render() {

    const recipes = this.props.recipesList.map((item, i) => {
      return <li key={i}>
        <RecipeListItem item={item} />
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
