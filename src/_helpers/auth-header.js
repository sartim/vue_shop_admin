import {Encipher} from "./encipher";

export function authHeader() {
    // return authorization header with jwt token
    let user = Encipher.decrypt(localStorage.getItem('user'), 'object');
    if (user && user.access_token) {
        return { 'Authorization': 'Bearer ' + user.access_token };
    } else {
        return {};
    }
}