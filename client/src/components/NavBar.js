import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    
    async function handleLogout(e){
        e.preventDefault();
        
        const res = await fetch('/api/logout', {
            method: 'DELETE'
        })
        if (res.ok) navigate('/')
    }
    return <button onClick={handleLogout}>Logout</button>
}

export default NavBar;