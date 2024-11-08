import Router from './app/Router'
import Login from './pages/Login';
import { useTokenContext } from './providers/TokenProvider';

const App = () => {
  const { token } = useTokenContext(); // Asegúrate de que estás obteniendo el token del contexto correctamente

  return token ? <Router /> : <Login />; // Retorna el JSX dependiendo del token
}

export default App;