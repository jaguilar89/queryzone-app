import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function Login() {
    const [showLogin, setShowLogin] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div>
            {showLogin ? (
                <LoginForm setShowLogin={setShowLogin} isLoading={isLoading} setIsLoading={setIsLoading}/>

            ) : (
                <SignupForm setShowLogin={setShowLogin} isLoading={isLoading} setIsLoading={setIsLoading}/>
            )
            }
        </div>

    )
}

export default Login;