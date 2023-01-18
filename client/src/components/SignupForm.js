import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

function SignupForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password,
                    password_confirmation: passwordConfirmation
                })
            })

            if (res.ok) {
                const user = await res.json()
                setUser(user)
                navigate("/")
            }
        } catch (err) {
            console.log(err.errors)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="username">Username:</label><br />
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
            <label for="password">Password</label><br />
            <input type="text" name="lname" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
            <label for="password-confirmation">Password Confirmation</label><br />
            <input type="text" name="lname" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} /><br></br>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default SignupForm;