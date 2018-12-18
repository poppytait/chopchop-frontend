import React, { Component } from 'react';
import FavouritesService from '../lib/FavouritesService';
import { withAuth } from '../providers/AuthProvider'

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favourites: [],
        }

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        // const userId = this.props.user._id;
        // const item = this.state.item;

        FavouritesService.getRecipes()
            .then((recipe) => {
                console.log(recipe)
                this.setState({
                    favourites: recipe.data.favourites,
                });
            })
            .catch(error => console.log(error))
    }

    render() {
        const { favourites } = this.state

        console.log('saved: ', favourites)

        // const favRecipe = this.state.favourites.data
        // favRecipe.map((item, i) => {
        //     console.log(item)
        //     return <li key={i}>
        //         {item}
        //     </li>
        // })
        return (
            <div>
                {favourites.map((item, i) => {
                    console.log(item)
                    return <li key={i}>
                        {item.calories}
                    </li>
                })}
            </div >
        );
    }
}

export default withAuth(Profile);
// profile in brackets because youre passing props of profile via auth provider component