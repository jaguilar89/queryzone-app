import NavBar from "../components/NavBar";


function Home({ user }) {
    return (
        <>
            <h1>Logo here</h1>
            <NavBar />
            {user && <h2>Welcome {user.username}</h2>}
        </>
    )
}

export default Home;