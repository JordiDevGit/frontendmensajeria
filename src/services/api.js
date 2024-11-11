import axios from 'axios';

// Crear una instancia de Axios con la URL base
const instance = axios.create({ baseURL: 'http://localhost:8080' });

// Función de login
export const login = async (username, password) => {
    const token = btoa(username + ":" + password); // Codifica el username y password en base64
    const response = await instance.post("/login", {}, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "basic " + token, // Utiliza el token basic para la autenticación
        },
    });
    if (response.data.resp === "Login exitoso") {
        setAuth(token); // Si el login es exitoso, guarda el token para futuras solicitudes
        return {token, id: response.data.id};
    }
    return null;
};

// Función para establecer el token de autenticación en el encabezado de Axios
export const setAuth = async (token) => {
    instance.defaults.headers.common.Authorization = `basic ${token}`;
};

// Función para obtener todos los usuarios (esto parece ser una función adicional, no está relacionada con mensajes)
export const getUsers = async () => await instance.get('/users');

// Función para obtener todos los usuarios (esto parece ser una función adicional, no está relacionada con mensajes)
export const getMessages = async () => await instance.get('/messages');

// Función para obtener los mensajes del usuario logueado
export const getUserMessages = async () => {
    try {
        const response = await instance.get('/messages'); // Hace la solicitud GET a /messages
        return response.data; // Devuelve los mensajes obtenidos
    } catch (error) {
        console.error('Error al obtener los mensajes:', error);
        return null; // En caso de error, devuelve null
    }
};

// Función para publicar un mensaje
export const postUserMessage = async (message) => {
    try {
        const response = await instance.post('/messages', message); // Envia el mensaje al servidor
        return response.data; // Devuelve la respuesta del servidor (mensaje guardado)
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        return null; // Si ocurre un error, devuelve null
    }
};