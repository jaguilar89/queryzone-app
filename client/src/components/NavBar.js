import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function NavBar() {
    const {setUser} = useContext(UserContext)


    async function handleLogout(e){
        e.preventDefault();
        
        const res = await fetch('/api/logout', {
            method: 'DELETE'
        })
        if (res.ok) setUser(null)
    }
    return <button onClick={handleLogout}>Logout</button>
}

export default NavBar;