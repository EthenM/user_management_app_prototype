"use client"

import { useEffect, useState } from "react"
import UserCard from "./user-card"
import { getUpcomingEvents } from "../_services/event-service"

export default function SideBar({ children }) {

    const [upcommingEvents, setUpcommingEvents] = useState([])

    useEffect(() => {
        getUpcomingEvents()
            .then(response => {
                setUpcommingEvents(response);
            })
            .catch(err => {
                console.error("ERROR: " + err);
            })
    })

    return (
        <main className="flex bg-gray-100 h-screen">
            <section className="flex flex-col">
                <nav>
                    <header className="border-b p-4">
                        <a className="flex gap-3 cursor-pointer" href="/home">
                            <img src="/images/logo.svg" className="h-6 w-6" />
                            <p>Taekwondoon</p>
                        </a>
                    </header>


                    {/* Here marks the start of the links */}
                    <ul>
                        {/* HOME */}
                        <li className={"p-3" + (location.pathname.toLowerCase() == '/home' ? " border-l-4 border-black" : "")}>
                            <a href="/home">
                                <p>Home</p>
                            </a>
                        </li>
                        
                        {/* CUSTOMERS */}
                        <li className={"p-3" + (location.pathname.toLowerCase() == '/customers' ? " border-l-4 border-black" : "")}>
                            <a href="/customers">
                                <p>Customers</p>
                            </a>
                        </li>

                        {/* SCHEDULES */}
                        <li className={"p-3" + (location.pathname.toLowerCase() == '/schedules' ? " border-l-4 border-black" : "")}>
                            <a href="/schedules">
                                <p>Schedules</p>
                            </a>
                        </li>

                        {/* EVENTS */}
                        <li className={"p-3" + (location.pathname.toLowerCase() == '/events' ? " border-l-4 border-black" : "")}>
                            <a href="/events">
                                <p>Events</p>
                            </a>
                        </li>

                        {/* SETTINGS */}
                        <li className={"p-3" + (location.pathname.toLowerCase() == '/settings' ? " border-l-4 border-black" : "")}>
                            <a href="/settings">
                                <p>Settings</p>
                            </a>
                        </li>
                        
                    </ul>

                </nav>

                <section className="mt-5 flex-grow pl-5">
                    <h3 className="text-gray-400 text-xs">Upcoming Events</h3>

                    <ul className="mt-3">
                        {
                            upcommingEvents.map(event => 
                                <li key={event.id} className="text-sm mt-3">
                                    {event.title}
                                </li>
                            )
                        }
                    </ul>
                </section>

                <footer className="flex-none border-t">
                    <UserCard/>
                </footer>
            </section>


            <section className="bg-white flex-grow rounded-lg my-2 mr-2 border overflow-auto px-52">
                {children}
            </section>
        </main>
    )
}
