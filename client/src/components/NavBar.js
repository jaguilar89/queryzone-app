import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate()

    return (
        <nav>
            <button>Login</button>
            <button onClick={() => navigate("/signup")}>Signup</button>
            
        </nav>
    )
}

export default NavBar;