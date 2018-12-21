import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'


class SearchRecipe extends Component {
    render() {
        return (
            <div className="search-recipe">
                <h1>Search Recipe</h1>
                <SearchBar />

            </div>
        );
    }
}

export default SearchRecipe;