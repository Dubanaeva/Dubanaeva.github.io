import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './pages/Profile';
import IndexPage from './pages/IndexPage';
import QuizzesPage from './pages/QuizzesPage';
import AboutQuizPage from "./pages/AboutQuizPage";
import ProtectedRoute from "./components/ProtectedRoute";
import QuizPage from "./pages/QuizPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<ProtectedRoute><IndexPage/></ProtectedRoute>}/>
                <Route path='login' element={<LoginPage/>}/>
                <Route path='quizzes' element={<ProtectedRoute><QuizzesPage/></ProtectedRoute>}/>
                <Route path='start/:quizId' element={<QuizPage/>}/>
                <Route path='quizzes/:quizId' element={<AboutQuizPage/>}/>
                <Route path='register' element={<RegisterPage/>}/>
                <Route path='profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
