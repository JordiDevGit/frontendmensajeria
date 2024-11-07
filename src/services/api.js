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
    console.log(response)
    if(response.data.resp === "Login exitoso"){
        alert("uyuyuyuyu")
        setAuth(token);
    }
}

export const setAuth = async (token) => {
    instance.defaults.headers.common.Authorization = `basic ${token}`;
};

export const test = () => {
	instance.get("/users");
}