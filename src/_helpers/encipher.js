import * as CryptoJS from "crypto-js";


export const Encipher =  {
    encrypt,
    decrypt
};

function encrypt(val, type) {
    if (type === 'object') {
        return CryptoJS.AES.encrypt(JSON.stringify(val), 'super-dupah-secret');
    } else if (type === 'string') {
        return CryptoJS.AES.encrypt(val, 'super-dupah-secret')
    }
}

function decrypt(ciphertext, type) {
    if (type === 'object') {
        const bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'super-dupah-secret');
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } else if (type === 'string') {

    }

}