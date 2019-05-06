import config from 'config';
import { authHeader } from '../_helpers';
import { handleResponse } from "../_helpers/response-handler";
import {Script} from "../_helpers/script";

export const userService = {
    login,
    logout,
    getAll
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${config.apiUrl}/account/generate/jwt/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.access_token) {
                // Encrypt data before storing user details and jwt token in local storage
                // to keep user logged in between page refreshes
                const cipher_txt = Script.encrypt(JSON.stringify(user));
                localStorage.setItem('user', cipher_txt)
            }
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}
