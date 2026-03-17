"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            if (!res.ok) {
                alert("Login failed")
                setLoading(false)
                return
            }

            const data = await res.json()
            if(data.role === "admin"){
                router.push("/admin")
            }
            else if(data.role === "doctor"){
                router.push("/doctor")
            }
            else if(data.role === "receptionist"){
                router.push("/receptionist")
            }
            else{
               router.push("/patient")
            }
        } catch (error) {
            console.error(error)
            alert("An error occurred")
            setLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#167d6a] to-[#0c5c4c]">
            <div className="bg-white rounded-[14px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 w-full max-w-[380px] m-4">
                <div className="mb-8">
                    <h1 className="text-[24px] font-bold text-[#1f2937]">Clinic Queue</h1>
                    <p className="text-[14px] text-gray-500 font-medium mt-1">Sign in</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#167d6a]/40 focus:border-[#167d6a] transition-all bg-transparent"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className="pt-1">
                        <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#167d6a]/40 focus:border-[#167d6a] transition-all bg-transparent"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#188975] hover:bg-[#147563] text-white font-medium py-2.5 px-4 rounded-lg transition-colors disabled:opacity-70 text-sm shadow-sm"
                        >
                            {loading ? "Signing in..." : "Sign in"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
