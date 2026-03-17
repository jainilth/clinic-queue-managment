'use client'

import { AddAppointment } from '@/app/service/patient.service'
import React, { useState, useEffect } from 'react'

export default function BookAppointmentPage() {
    const [minDate, setMinDate] = useState('')

    useEffect(() => {
        // Set minimum date to today
        const today = new Date()
        const year = today.getFullYear()
        const month = String(today.getMonth() + 1).padStart(2, '0')
        const day = String(today.getDate()).padStart(2, '0')
        setMinDate(`${year}-${month}-${day}`)
    }, [])

    const timeSlots = [
        "Select slot",
        "09:00-09:15",
        "09:15-09:30",
        "09:30-09:45",
        "09:45-10:00",
        "10:00-10:15",
        "10:15-10:30",
        "10:30-10:45",
        "10:45-11:00",
        "11:00-11:15",
        "11:15-11:30",
        "11:30-11:45",
        "11:45-12:00",
        "14:00-14:15",
        "14:15-14:30",
        "14:30-14:45",
        "14:45-15:00",
        "15:00-15:15",
        "15:15-15:30",
        "15:30-15:45",
        "15:45-16:00"
    ];

    return (
        <div className="w-full max-w-5xl">
            <h1 className="text-[20px] font-bold text-[#167d6a] mb-6">Book Appointment</h1>

            <div className="bg-white rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.06)] border border-gray-50 p-6 w-full max-w-4xl">
                <p className="text-[#8c9bab] text-[13px] font-medium mb-6">
                    Don't enter appointment from past, if you form will not be submited
                </p>
                <form action={AddAppointment} className="space-y-6">
                    <div>
                        <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Date</label>
                        <input
                            name='date'
                            type="date"
                            min={minDate}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#167d6a]/40 focus:border-[#167d6a] transition-all text-gray-800"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Time slot</label>
                        <select
                            name='time'
                            defaultValue=""
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#167d6a]/40 focus:border-[#167d6a] transition-all bg-white text-gray-800"
                            required
                        >
                            {timeSlots.map((slot, index) => (
                                <option
                                    key={index}
                                    value={slot === "Select slot" ? "" : slot}
                                    disabled={slot === "Select slot"}
                                >
                                    {slot === "Select slot" ? "✓ Select slot" : slot}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="pt-2">
                        <button type="submit" className="bg-[#167d6a] hover:bg-[#137466] text-white px-5 py-2 rounded-md text-[13px] font-medium transition-colors shadow-sm">
                            Book Appointment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
