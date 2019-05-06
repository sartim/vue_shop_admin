import config from 'config';
import { authHeader } from '../_helpers';
import {handleResponse} from "../_helpers/response-handler";

export const productService = {
    getAll
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/product/`, requestOptions).then(handleResponse);
}