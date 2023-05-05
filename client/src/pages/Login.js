import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function Login() {
    const [showLogin, setShowLogin] = useState(true)
    const [loading, setLoading] = useState(false)

    return (
        <div>
            {showLogin ? (
                <LoginForm setShowLogin={setShowLogin} loading={loading} setLoading={setLoading}/>

            ) : (
                <SignupForm setShowLogin={setShowLogin} loading={loading} setLoading={setLoading}/>
            )
            }
        </div>

    )
}

export default Login;