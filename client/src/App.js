import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Home from './pages/Home';
import { UserContext } from './components/context/UserContext'
import Login from './pages/Login';
import Post from './pages/Post';

function App() {
    const { user, setUser } = useContext(UserContext)

    if (!user) return <Login />

    return (
        <Routes>
            <Route path='/' element={<Home user={user} setUser={setUser} />} />
            <Route path='/posts/:id' element={<Post />} />
        </Routes>
    )
}

export default App;

