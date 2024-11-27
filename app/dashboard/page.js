"use client"

import { useUserAuth } from "../_authorization/auth-context"

export default function Dashboard() {
    const {user, logout} = useUserAuth();

    return (
        <main>
            <p>
                this is working
            </p>
            <button onClick={logout}>Logout</button>
        </main>
    )
}
