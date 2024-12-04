"use client"

import { useEffect, useState } from "react";
import { useUserAuth } from "../../_authorization/auth-context"
import { getSchedules } from "@/app/_services/schedule-service";

export default function Dashboard() {

    const {user} = useUserAuth();

    const [schedule, setSchedule] = useState([])


    useEffect(() => {
        getSchedules()
            .then(response => {
                setSchedule(response);
            })
            .catch(err => {
                console.error("ERROR: " + err);
            })
    })

    return (
        <section>
            <header>
                <h1 className="font-bold text-2xl mt-10 mb-14">Welcome, <span className="capitalize">{user?.userName}</span></h1>
            </header>


            {/* THE OVERVIEWS */}
            <section className="pr-32">
                <h2 className="font-bold mb-5 text-lg">Overview</h2>

                <div className="flex gap-10">
                    
                    <section className="border-t-2 flex-grow pt-8">
                        <h3 className="font-bold text-lg mb-5">Total Revenue</h3>
                        <p className="font-bold text-3xl mb-3">$2.6M</p>
                        <p><span className="rounded-lg p-1 bg-green-100 text-green-500">+4.5%</span> from last week</p>
                    </section>

                    <section className="border-t-2 flex-grow pt-8">
                        <h3 className="font-bold text-lg mb-5">Total Customers</h3>
                        <p className="font-bold text-3xl mb-3">288</p>
                        <p><span className="rounded-lg p-1 bg-red-100 text-red-500">-4.5%</span> from last week</p>
                    </section>

                    <section className="border-t-2 flex-grow pt-8">
                        <h3 className="font-bold text-lg mb-5">Employees</h3>
                        <p className="font-bold text-3xl mb-3">8</p>
                        <p><span className="rounded-lg p-1 bg-green-100 text-green-500">+4.5%</span> from last week</p>
                    </section>

                </div>
            </section>


            {/* THE UPCOMING SCHEDULE */}
            <section>
                <h2 className="font-bold mt-20 text-lg">Upcoming Schedule</h2>

                <div className="pl-10">
                    <table className="relative w-full mt-4">
                        <thead>
                            <tr className="border-b">
                                <th className="font-normal text-gray-400 text-start max-w-14 pb-2">Timeslot</th>
                                <th className="font-normal text-gray-400 text-start max-w-14 pb-2">Date</th>
                                <th className="font-normal text-gray-400 text-start max-w-14 pb-2">Main Instructor</th>
                                <th className="font-normal text-gray-400 text-start max-w-14 pb-2">Level</th>
                                <th className="font-normal text-gray-400 text-start max-w-14 pb-2">Class Size</th>
                            </tr>
                        </thead>


                        <tbody>

                            {
                                schedule.map(item => 
                                    <tr key={item.id} className="border-b border-gray-100">

                                        <td className="py-2 text-sm">
                                            {
                                                item.startTime.toLocaleTimeString('en-US', {
                                                    hour: '2-digit', 
                                                    hourCycle: 'h23', // 24-hour format
                                                    minute: '2-digit'
                                                })
                                            } ~&nbsp;
                                            {
                                                item.endTime.toLocaleTimeString('en-US', {
                                                    hour: '2-digit', 
                                                    hourCycle: 'h23', // 24-hour format
                                                    minute: '2-digit'
                                                  })
                                            }
                                        </td>

                                        <td className="text-gray-400 text-sm">
                                            {item.startTime.toLocaleDateString('en-US', { month: 'long' })} {item.startTime.getDay()}, {item.startTime.getFullYear()}
                                        </td>

                                        <td className="capitalize text-sm">
                                            {item.primaryInstructor.toLowerCase()}
                                        </td>

                                        <td className="text-sm capitalize">
                                            {Object.keys(getSchedules.levels)[Object.values(getSchedules.levels).indexOf(item.level)].toLowerCase()}
                                        </td>

                                        <td className="text-sm text-center">
                                            {item.classSize}
                                        </td>

                                    </tr>
                                )
                            }

                        </tbody>

                    </table>
                </div>
            </section>

        </section>
    )
}
