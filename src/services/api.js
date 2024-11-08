import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080' });

export const login = async (username, password) => {
    const token = btoa(username + ":" + password);
    const response = await instance.post("/login",{},
    {
        headers: {
            "Content-Type": "application/json",
            Authorization: "basic " + token,
        },
    });
    if(response.data.resp === "Login exitoso"){
        setAuth(token);
        return token;
    }
    return null;
}

export const setAuth = async (token) => {
    instance.defaults.headers.common.Authorization = `basic ${token}`;
};

export const getUsers = async () => await instance.get('/users');

export const getUserMessages = async () => await instance.get('/messages');

export const postUserMessage = async () => await instance.post('/messages');