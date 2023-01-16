import { useState } from "react";

function Signup() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await fetch("/signup", {
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
                
            }
        } catch(err) {
            setErrors(err.errors)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="username">Username:</label><br />
            <input type="text" name="username" value={username} onChange={setUsername}/><br />
            <label for="password">Password</label><br />
            <input type="text" name="lname" value={password} onChange={setPassword}/><br></br>
            <label for="password-confirmation">Password Confirmation</label><br />
            <input type="text" name="lname" value={passwordConfirmation} onChange={setPasswordConfirmation}/><br></br>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Signup;