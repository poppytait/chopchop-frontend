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
    }

    getRecipes() {
        return this.apiInstance.get('/favourites')
            .then((recipe) => {
                return recipe;
            })
    }

}


export default new FavouritesService();

