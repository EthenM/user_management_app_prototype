"use client"

import { useEffect, useRef, useState } from "react";
import { useUserAuth } from "../_authorization/auth-context"

export default function UserCard() {
    const {user, logout} = useUserAuth();

    const [showMenu, setShowMenu] = useState(false);

    const chevronUp = "M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z";
    const chevronDown = "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z";


    useEffect(() => {

        if (showMenu) {
            const hideMenu = () => {
                console.log("hiding the menu now...")
                setShowMenu(false);
            }

            console.log("showing the menu now...", showMenu)

            //the menu is being shown, and something has been clicked. stop showing the menu.
            // console.log("showing the menu now...")
            document.addEventListener("click", hideMenu);

            return () => {
                document.removeEventListener("click", hideMenu);
            }
        }
    }, [showMenu])


    return (
        <div className="flex flex-col">

            {/* The menu when the chevron is clicked. */}
            {
                showMenu &&

                <section className="border-b p-3">
                    <button className="rounded bg-black text-white px-4 py-2 w-full" onClick={logout}>Logout</button>
                </section>
            }

            <div className="flex gap-3 items-center p-3">
                <img className="w-14 h-14" src={user?.profile_img} />
                
                <div className="flex flex-col justify-center mr-2">
                    <p className="capitalize font-bold">{user?.first_name} {user?.last_name}</p>
                    <p className="text-gray-500 font-medium text-xs">{user?.email}</p>
                </div>

                <div onClick={() => setShowMenu(!showMenu)} className="cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                    >
                        <path
                            className="transition-all duration-300 ease-in-out"
                            fillRule="evenodd"
                            d={showMenu ? chevronDown : chevronUp}
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        
        </div>
    )
}
