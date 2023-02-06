import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from './components/context/UserContext'
import Login from './pages/Login';
import PostList from './components/PostList';
import Post from './pages/Post';
import NewPostForm from './components/NewPostForm';
import NavBar from './components/NavBar';

function App() {
    const { user } = useContext(UserContext)
    const [postList, setPostList] = useState([])

    if (!user) return <Login />

    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/posts/:id' element={<Post />} />
                <Route path='/posts/new' element={<NewPostForm postList={postList} setPostList={setPostList}/>} />
                <Route path='/' element={<PostList postList={postList} setPostList={setPostList} />} />
            </Routes>
        </>
    )
}

export default App;

