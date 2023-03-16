import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function Login() {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div>
            {showLogin ? (
                <LoginForm setShowLogin={setShowLogin} />

            ) : (
                <SignupForm setShowLogin={setShowLogin} />
            )
            }
        </div>

    )
}

export default Login;