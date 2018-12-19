import React, { Component } from 'react';
import EdamamService from '../lib/EdamamService';
import RecipeList from '../components/RecipeList'
import '../style.css'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      recipes: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    EdamamService.searchRecipes(this.state.value)
      .then((recipes) => this.setState({ recipes }))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="searchbar">
          <label>
            Ingredient:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <button><input type="submit" value="Submit" /></button>
        </form>
        <RecipeList recipesList={this.state.recipes} />
      </div>
    );
  }
}

export default SearchBar;