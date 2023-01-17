import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Home from './pages/Home';
import Signup from './pages/Signup';
import { UserContext } from './components/context/UserContext'



function App() {
    const { user, setUser } = useContext(UserContext)

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup setUser={setUser}/>} />
        </Routes>
    )
}

export default App;
