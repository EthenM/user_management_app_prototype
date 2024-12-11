"use client"

import { useEffect, useState } from "react";
import { useUserAuth } from "../_authorization/auth-context"
import { getSchedules } from "@/app/_services/schedule-service";
import AppStat from "@/app/_components/stat";

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
    }, [])

    return (
        <section>
            <header>
                <h1 className="font-bold text-lg mt-10 mb-14">Welcome, <span className="capitalize">{user?.userName}</span></h1>
            </header>


            {/* THE OVERVIEWS */}
            <section className="pr-32">
                <h2 className="font-bold mb-5 text-sm">Overview</h2>

                <div className="flex gap-10">
                    
                    <AppStat title="total revenue" value="$2.6M" changeFromLastPeriod="+4.5%" />
                    <AppStat title="Total Customers" value="288" changeFromLastPeriod="-4.5%" />
                    <AppStat title="Employees" value="8" changeFromLastPeriod="+4.5%" />

                </div>
            </section>


            {/* THE REGISTERED SCHEDULE */}
            <section>
                <h2 className="font-bold mt-20 text-sm">Registered Schedule</h2>

                <div className="pl-10">
                    <table className="relative w-full mt-4">
                        <thead>
                            <tr className="border-b">
                                <th className="font-medium text-sm text-gray-500 text-start max-w-14 pb-2">Timeslot</th>
                                <th className="font-medium text-sm text-gray-500 text-start max-w-8 pb-2">Date</th>
                                <th className="font-medium text-sm text-gray-500 text-start max-w-14 pb-2">Main Instructor</th>
                                <th className="font-medium text-sm text-gray-500 text-start max-w-14 pb-2">Level</th>
                                <th className="font-medium text-sm text-gray-500 text-start max-w-14 pb-2">Class Size</th>
                            </tr>
                        </thead>


                        <tbody>

                            {
                                schedule.map(item => 
                                    <tr key={item.id} className="border-b border-gray-100">

                                        <td className="py-2 text-sm max-w-14 font-medium">
                                            {
                                                item.startTime.toLocaleTimeString('en-US', {
                                                    hour: '2-digit', 
                                                    hourCycle: 'h23', // 24-hour format
                                                    minute: '2-digit'
                                                })
                                            } -&nbsp;
                                            {
                                                item.endTime.toLocaleTimeString('en-US', {
                                                    hour: '2-digit', 
                                                    hourCycle: 'h23', // 24-hour format
                                                    minute: '2-digit'
                                                  })
                                            }
                                        </td>

                                        <td className="text-gray-400 text-sm max-w-16 font-medium">
                                            {item.startTime.toLocaleDateString('en-US', { month: 'long' })} {item.startTime.getDay()}, {item.startTime.getFullYear()}
                                        </td>

                                        <td className="capitalize text-sm font-medium">
                                            {item.primaryInstructor.toLowerCase()}
                                        </td>

                                        <td className="text-sm capitalize font-medium">
                                            {Object.keys(getSchedules.levels)[Object.values(getSchedules.levels).indexOf(item.level)].toLowerCase()}
                                        </td>

                                        <td className="text-sm text-center font-medium">
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
