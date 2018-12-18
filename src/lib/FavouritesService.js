import axios from 'axios';

class FavouritesService {
    constructor() {
        this.apiInstance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
            withCredentials: true
        })
    }

    saveRecipe(recipe) {
        //NOT IN URL BECAUSE IT'S IN BODY
        return this.apiInstance.post('/favourites', recipe)
    }

    getRecipes() {
        return this.apiInstance.get('/favourites')
            .then((recipe) => {
                return recipe;
            })
    }

    deleteRecipe(recipeID) {
        // RecipeID in the URL because it's part of the URL itself
        return this.apiInstance.delete(`/favourites/${recipeID}`)
            //.then has 'user' because the user object is what is returned from the above code
            .then((user) => {
                return user;
            })
    }

}


export default new FavouritesService();

