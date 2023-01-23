import NavBar from "../components/NavBar";
import PostList from "../components/PostList";

function Home({ user }) {

    return (
        <>
            <NavBar />
            <PostList />
        </>
    )
}

export default Home;