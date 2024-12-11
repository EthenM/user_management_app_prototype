"use client"

import { use, useEffect, useState } from "react";
import { getStudents } from "@/app/_services/student-service";
import { Pagination, PaginationGap, PaginationNext, PaginationPage, PaginationPrevious } from '@/app/_components/pagination'

export default function StudentsPage(props) {

    const searchParams = use(props.searchParams)
    const page = searchParams.page ? searchParams.page : '1'
    console.log(searchParams, page)

    const [students, setStudents] = useState([])
    const [links, setLinks] = useState([])


    useEffect(() => {
        getStudents(page)
            .then(response => {
                console.log("the response: ", response)
                setStudents(response.data);
                setLinks(response.meta.links)
            })
            .catch(err => {
                console.error("ERROR: " + err);
            })
    }, [page])


    const conditionalStyle = (expiredAt) => {
        const currentDate = new Date().valueOf()
        const expirationDate = new Date(expiredAt).valueOf()
        const daysUntilExpiration = (expirationDate - currentDate) / (1000 * 60 * 60 * 24)
    
        return {
          color: daysUntilExpiration <= 5 && daysUntilExpiration >= 0 ? 'red' : '',
        }
    }

    return (

        <section className="p-0">
            <div className="flex items-end justify-between gap-4">
                <h2 className="font-bold mt-20 text-zinc-950 text-lg">Students</h2>

                <a href="/students/register/" className="size-fit">
                    <button className="-my-0.5 bg-black text-white rounded-lg py-1 px-2">Register</button>
                </a>
            </div>

            <div className="mt-8 overflow-auto h-96">
                <table className="relative w-full">
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
                            students.map(student => 
                                <tr key={student.id} className="border-b border-gray-100">

                                    <td className="py-2 text-sm max-w-14 font-medium">
                                        {student.id}
                                    </td>

                                    <td className="text-gray-400 text-sm max-w-16 font-medium">
                                        availaibility here
                                    </td>

                                    <td className="capitalize text-sm font-medium">
                                        {student.fullName}
                                    </td>

                                    <td className="text-sm capitalize font-medium">
                                        <div className="flex items-center gap-2">
                                            <img src={student.profileImgUrl} className="size-6" />
                                            <span>{student.beltColor} Belt</span>
                                        </div>
                                    </td>

                                    <td className="text-sm text-right font-medium" style={conditionalStyle(student.expiredAt)}>
                                        {student.expiredAt}
                                    </td>

                                </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>

            <Pagination className="mt-10">
                {
                    links.map((link, idx) =>
                        idx === 0 ? (
                            <PaginationPrevious key={idx} href={link.url} />
                        ) : link.url === null && idx < links.length - 1 ? (
                            <PaginationGap key={idx} />
                        ) : idx === links.length - 1 ? (
                            <PaginationNext key={idx} href={link.url} />
                        ) : (
                            <PaginationPage key={idx} href={link.url} {...(link.active ? { current: true } : {})}>
                                {link.label}
                            </PaginationPage>
                        )
                    )
                }
            </Pagination>
        </section>
    )
}
