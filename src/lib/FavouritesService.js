import axios from 'axios';

class FavouritesService {
    constructor() {
        this.apiInstance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
            withCredentials: true
        })
    }

    saveRecipe(recipe) {
        return this.apiInstance.post('/favourites', recipe)
        // .then(({ data }) => data);
    }

    getRecipes(userId) {
        return this.apiInstance.get('/favourites/:recipeID')
        // get rid of 'recipes' on the end because you're not sending anything
    }

}


export default new FavouritesService();

