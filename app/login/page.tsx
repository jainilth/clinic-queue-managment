"use client"

import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const router = useRouter()

    async function handleSubmit(e: any) {
        e.preventDefault()

        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ email, password })
        })

        if (!res.ok) return alert("Login failed")

        const data=await res.json()
        if(data.role==="admin"){
            // router.push("/admin")
            redirect("/admin")
        }
        if(data.role==="doctor"){
            // router.push("/admin")
            redirect("/doctor")
        }
        if(data.role==="receptionist"){
            // router.push("/admin")
            redirect("/receptionist")
        }
        else{
           redirect("/patient")
        }

    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <input type="submit" />
            </form>
        </div>
    )
}

export default LoginPage
