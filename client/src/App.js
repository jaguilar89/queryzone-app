import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Home from './pages/Home';
import { UserContext } from './components/context/UserContext'
import Login from './pages/Login';

function App() {
    const { user, setUser } = useContext(UserContext)

    if (!user) return <Login />

    return (
        <Routes>
            <Route path='/home' element={<Home user={user} />} />
            <Route path='/' element={<Login />} />
        </Routes>
    )
}

export default App;
