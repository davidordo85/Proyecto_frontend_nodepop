const BASE_URL = "http://127.0.0.1:8000";



export default {
    getAdvertisements: async () => {
        const url = `${BASE_URL}/api/posts`;
        const response = await fetch(url);
        if (response.ok) {
            const data = response.json();
            return data;

        } else {
            throw new Error(`HTTP Error: ${response.status}`)
        }
    },

    registerUser: async (user) => {
        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user) // convierte el objeto de usuarios a JSON
        }
        const url = `${BASE_URL}/auth/register`;
        const response = await fetch(url, config);
        const data = response.json(); // respuesta del servidor sea OK o sea ERROR.
        if (response.ok) {
            return data;
        } else {
            throw new Error(data);
        }
    }
};