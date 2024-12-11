"use client"

import { useEffect, useState } from "react";
import { useUserAuth } from "../_authorization/auth-context";
import ToggleSwitch from "../_components/toggle-switch";

export default function SignInPage() {
    const {user, login, logout} = useUserAuth();
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

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
        if (user && JSON.stringify(user) != "{}") {
            //the user is authenticated, send them off to the main page.
            location.pathname = "/"
        }
    }, [user])

    return (
        <main className="flex flex-col gap-8 justify-center items-center h-screen" >
            

            <img src="/images/logo.svg" className="h-32 w-32" alt="The taekwondoon logo" />

            {/* sign in card */}
            <section className="p-10 rounded-xl bg-white shadow">

                <h1 className="font-bold text-lg mb-8">Sign In</h1>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label className="block mb-3">Email</label>
                        <input
                            type="email"
                            className="border rounded-lg p-2 shadow mb-8 w-full"
                            value={userName}
                            onChange={(event) => setUserName(event.target.value)}
                        />
                    </div>

                    <div className="mb-8">
                        <label className="block mb-3">Password</label>
                        <input
                            type="Password"
                            className="border rounded-lg p-2 shadow w-full"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>


                    <div className="flex justify-between gap-10 mb-8">

                        <div className="flex gap-2">
                            <ToggleSwitch checked={rememberMe} setChecked={(checked) => setRememberMe(checked)}/>
                            <label className="text-sm">Remember Me</label>
                        </div>

                        <div>
                            <a className="font-bold text-sm cursor-pointer hover:underline">Forgot Password</a>
                        </div>

                    </div>


                    <div>
                        <button className="text-center bg-black rounded-lg w-full text-white py-2">Get Started</button>
                    </div>

                </form>
            </section>
        </main>
    );
}
