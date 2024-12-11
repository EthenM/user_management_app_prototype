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
            <div className="flex items-end justify-between gap-4">
                <h2 className="font-bold mt-20 text-lg">Students</h2>

                <a href="/students/register">
                    <button className="-my-0.5 cursor-pointer">Register</button>
                </a>
            </div>

            <div className="mt-8">
                <table className="relative w-full [--gutter:theme(spacing.6)]">
                    <thead>
                        <tr className="border-b">
                            <th className="font-medium text-sm text-gray-500 text-start max-w-14 pb-2">Student ID</th>
                            <th className="font-medium text-sm text-gray-500 text-start max-w-8 pb-2">Promotion Availability</th>
                            <th className="font-medium text-sm text-gray-500 text-start max-w-14 pb-2">Name</th>
                            <th className="font-medium text-sm text-gray-500 text-start max-w-14 pb-2">Level</th>
                            <th className="font-medium text-sm text-gray-500 text-start max-w-14 pb-2 text-right">Expired Date</th>
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
    )
}
