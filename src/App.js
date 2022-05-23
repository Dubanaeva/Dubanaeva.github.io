import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import IndexPage from './pages/IndexPage';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<IndexPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='register' element={<RegisterPage />} />
                <Route path='profile' element={<Profile />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
