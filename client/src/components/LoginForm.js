import { useContext, useState } from "react";
import { UserContext } from "./context/UserContext";

function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { setUser } = useContext(UserContext)

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });
            if (res.ok) {
                const user = await res.json();
                setUser(user)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="username">Username:</label><br />
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
            <label for="password">Password</label><br />
            <input type="text" name="lname" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default LoginForm;