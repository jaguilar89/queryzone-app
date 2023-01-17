import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

function NavBar() {
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)

    return (
        <nav>
            <button>Login</button>
            <button onClick={() => navigate("/signup")}>Signup</button>
            {user && <h2>Hello {user.username}</h2>}
        </nav>
    )
}

export default NavBar;