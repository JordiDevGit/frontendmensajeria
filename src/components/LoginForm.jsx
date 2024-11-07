import { useState } from "react";
import { login } from "../services/api";

const LoginForm = () => {
    const [username, setUsername] = useState();

    const [password, setPassword] = useState();
    
    return(
        <form>  
            <label>User: </label>
            <input type="text" name="username" onChange={e => setUsername(e.target.value)} />
            <label>Password: </label>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
            <button type="button" onClick={() => login(username, password)} >Log In</button>
        </form>
    )
}

export default LoginForm;