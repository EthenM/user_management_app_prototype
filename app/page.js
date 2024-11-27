"use client"

import { useEffect, useState } from "react";
import { useUserAuth } from "./_authorization/auth-context";

export default function SignInPage() {
    const {user, login, logout} = useUserAuth();
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!user) {
            login(userName, password)
                .catch(err => {
                    console.error("ERROR: handleSubmit: " + err);
                })
        }
    }

    useEffect(() => {
        if (user) {
            //the user is authenticated, send them off to the main page.
            location.pathname = "/dashboard"
        }
    }, [user])

    return (
        <main>
            <img src="app\_assets\taekwondoon-logo.png" alt="The taekwondoon logo" />

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </div>

                <div>
                    <label>Password: </label>
                    <input
                        type="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <div>
                    <button>Login</button>
                </div>

            </form>
        </main>
    );
}
