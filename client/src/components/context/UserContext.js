import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

function UserContextProvider({ children }) {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    
    useEffect(() => {
        (async () => {
            const res = await fetch('/api/me')
            if (res.ok) {
                const user = await res.json()
                setUser(user)
                navigate('/home')
            }
        })()
    }, [navigate]);

    return <UserContext.Provider value={{ user, setUser }}> {children} </UserContext.Provider>
}

export { UserContext, UserContextProvider };