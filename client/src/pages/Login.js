import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

function Login() {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div>
            <h1>Logo here</h1>
            {showLogin ? (
                <>
                    <LoginForm />
                    <button onClick={() => setShowLogin(false)}>
                        No acct? Sign up
                    </button>
                </>

            ) : (
                <>
                    <SignupForm />
                    <button onClick={() => setShowLogin(true)}>
                        Have acct? Log In
                    </button>
                </>
            )
            }
        </div>

    )
}

export default Login;