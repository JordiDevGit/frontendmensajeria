import LoginForm from "../components/LoginForm";
import { test } from "../services/api";

const Login = () => {
    return(
        <div>
            <h1>Login Page</h1>
            <LoginForm/>
            <button type="button" onClick={test} >Get Users</button>
        </div>
    )
}

export default Login;