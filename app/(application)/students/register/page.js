"use client"

import { createStudent } from "@/app/_services/student-service"
import { useState } from "react"

export default function StudentRegisterPage() {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [beltColor, setBeltColor] = useState('white')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const createNewStudent = (event) => {
        event.preventDefault();
        
        let goodData = true

        if (password !== confirmPassword) {
            goodData = false
            alert('The passwords do not match.')
        }

        if (goodData) {

            const student = {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
                password_confirmation: confirmPassword,
                dob: birthdate,
                belt_color: beltColor
            }

            createStudent(student)
                .then((res) => {
                    if (res.status === 204) {
                        alert('Student Successfully Created!!')
                    }
                })
                .catch(err => {
                    console.error("ERROR formAction")
                })
        }

    }
  
    return (
      <section>
        <div className="max-lg:hidden">
          <a href="/students" className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 fill-zinc-400 dark:fill-zinc-500"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>

            Students
          </a>
        </div>
        <form onSubmit={createNewStudent} className="mt-4 lg:mt-8">
          <h1 className="text-xl">Student Registration</h1>
          <hr className="my-10 mt-6" />
  
          <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="space-y-1">
              <h3>First Name</h3>
            </div>
            <div>
              <input
                aria-label="First Name"
                className="border rounded-lg p-2 shadow mb-8 w-full"
                name="first_name"
                placeholder="John"
                onChange={(event) => setFirstName(event.target.value)}
                value={firstName}
            />
            </div>
            <div className="space-y-1">
                <h3>Last Name</h3>
            </div>
            <div>
                <input
                    aria-label="Last Name"
                    className="border rounded-lg p-2 shadow mb-8 w-full"
                    name="last_name"
                    placeholder="Doe"
                    onChange={(event) => setLastName(event.target.value)}
                    value={lastName}
                />
            </div>
            <div className="space-y-1">
              <h3>Email</h3>
            </div>
            <div className="space-y-4">
                <input
                    type="email"
                    className="border rounded-lg p-2 shadow mb-8 w-full"
                    aria-label="Email"
                    name="email"
                    placeholder="info@example.com"
                    onChange={(event) => setEmail(event.target.value)} 
                    value={email}
                />
            </div>
            <div className="space-y-1">
              <h3>Date of Birth</h3>
            </div>
            <div>
                <input
                    aria-label="Date of Birth"
                    className="border rounded-lg p-2 shadow mb-8 w-full"
                    name="dob"
                    placeholder="MM/DD/YYYY"
                    onChange={(event) => setBirthdate(event.target.value)}
                    value={birthdate}
                />
            </div>
            <div className="space-y-1">
              <h3>Belt Color</h3>
            </div>
            <div>
                <select
                    aria-label="Belt Color"
                    name="belt_color"
                    className="border rounded-lg p-2 shadow mb-8 w-full"
                    onChange={(event) => setBeltColor(event.target.value)}
                    value={beltColor}
                >
                    <option value="white">White</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="brown">Brown</option>
                    <option value="red">Red</option>
                    <option value="mixed">Mixed</option>
                    <option value="black">Black</option>
                </select>
            </div>
          </section>
  
          <hr className="my-10" />
  
          <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="space-y-1">
              <h3>Password</h3>
            </div>
            <div>
                <input
                    type="password"
                    className="border rounded-lg p-2 shadow mb-8 w-full"
                    aria-label="Password"
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                />
            </div>
            <div className="space-y-1">
              <h3 className="">Confirm Password</h3>
            </div>
            <div>
                <input
                    type="password"
                    className="border rounded-lg p-2 shadow mb-8 w-full"
                    aria-label="Confirm Password"
                    name="password_confirmation"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    value={confirmPassword}
                />
            </div>
          </section>
  
          <hr className="my-10" />
  
          <div className="flex justify-end gap-4">
            <button type="reset" className="bg-black text-white rounded-lg py-1 px-2">
              Reset
            </button>
            <button type="submit" className="bg-black text-white rounded-lg py-1 px-2">
              Register
            </button>
          </div>
        </form>
      </section>
    )
  }
