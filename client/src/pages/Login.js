import React, { useContext, useState } from 'react';
import { UserContext } from '../components/context/UserContext';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import Home from './Home';

function Login() {
    const [showLogin, setShowLogin] = useState(true)
    const { user } = useContext(UserContext)

    return (
        <div>
            {showLogin ? (
                <>
                    <LoginForm setShowLogin={setShowLogin} />
                </>

            ) : (
                <>
                    <SignupForm setShowLogin={setShowLogin} />
                </>
            )
            }
        </div>

    )
}

export default Login;