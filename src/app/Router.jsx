import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/layout/Layout.jsx';
import Login from '../pages/Login.jsx';
import Chat from '../pages/Chat.jsx';

const Router = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/chat' element={<Chat/>} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default Router;