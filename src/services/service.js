import axios from 'axios';
import { API_URL } from './api';

export default class Service {

    getPlanets() {
        return new Promise((resolve, reject) => {
            axios.get(API_URL)
                .then(response => {
                    resolve(response);
                })
                .catch(error => console.error(error));
        });
    }
}