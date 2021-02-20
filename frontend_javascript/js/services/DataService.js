const BASE_URL = "http://127.0.0.1:8000";
const TOKEN_KEY = 'token'



export default {
    getAdvertisements: async function() {
        const url = `${BASE_URL}/api/messages?_expand=user`;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data.map(tweet => {
                return {
                    message: tweet.message, 
                    date: tweet.createdAt,
                    author: tweet.user.username
                }
            });

        } else {
            throw new Error(`HTTP Error: ${response.status}`)
        }
    },

    post: async function(url, postData) {
        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData) // convierte el objeto de usuarios a JSON
        }
        const response = await fetch(url, config);
        const data = await response.json(); // respuesta del servidor sea OK o sea ERROR.
        if (response.ok) {
            return data;
        } else {
            // TODO: mejorar gestion de errores
            // si tiene data.message devuelve el mensaje si no devuelve undefined
            throw new Error(data.message || JSON.stringify(data));
        }
    },

    registerUser: async function(user) {
        const url = `${BASE_URL}/auth/register`
        return await this.post(url, user);
    },

    login: async function(user) {
        const url = `${BASE_URL}/auth/login`
        return await this.post(url, user);
    },

    saveToken: async function(token) {
        localStorage.setItem(TOKEN_KEY, token);
    },

    getToken: async function() {
        return localStorage.getItem(TOKEN_KEY);
    },

    isUserLogged: async function() {
        const token = await this.getToken();
        return token !== null; // devuelve true o false
    }
};