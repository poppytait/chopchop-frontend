import axios from 'axios';
import mockData from './mockData.json'

class EdamamService {
    constructor() {
        this.apiInstance = axios.create({
            baseURL: 'https://api.edamam.com',
        })
    }

    searchRecipes(query) {
        let promise = new Promise(function (resolve, reject) {
            // executor (the producing code, "singer")
            setTimeout(() => resolve(mockData), 1000);
        });

        return promise.then((response) => (response))

        //     return this.apiInstance.get('/search', {

        //         params: {
        //             q: query,
        //             app_id: Config.appId,
        //             app_key: Config.appKey,
        //             from: 0,
        //             to: 10,
        //         }
        //     })
        //         .then((response) => response.data.hits)
        //         .catch((err) => err)
        //
    }

}


export default new EdamamService();

