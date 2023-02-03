import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

function UserContextProvider({ children }) {
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        (async () => {
            const res = await fetch('/api/me')
            if (res.ok) {
                const user = await res.json()
                setUser(user)
            }
        })()
    }, []);

    return <UserContext.Provider value={{ user, setUser }}> {children} </UserContext.Provider>
}

export { UserContext, UserContextProvider };