import {getUsers, login} from '../services/api';
import {useState} from 'react';
import {useTokenContext} from '../providers/TokenProvider';
import { redirect } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const { setToken } = useTokenContext();

    const handleLogin = async () => {
    const token = await login(username, password)
        setToken(token)
        redirect('')
    }
    
    return(
    <div>
        <h1>Login Page</h1>
        <form>  
            <label>User: </label>
            <input type="text" name="username" onChange={e => setUsername(e.target.value)} />
            <label>Password: </label>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
            <button type="button" onClick={handleLogin} >Log In</button>
        </form>
        <button type="button" onClick={getUsers} >Get Users</button>
    </div>
        
    )
}

export default Login;