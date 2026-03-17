import React from 'react'
import { GetMyClinic } from '../service/admin.service'

export default async function Admin() {
    const response = await GetMyClinic()

    if (response?.error) {
        return (
            <div className="p-8">
                <h1 className="text-red-500 font-medium">Error: {response.error}</h1>
            </div>
        )
    }
    return (
        <div className="p-8 max-w-4xl max-w-[800px] w-full">
            <h1 className="text-[20px] font-bold text-[#167d6a] mb-6">My Clinic</h1>

            <div className="bg-white rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.06)] border border-gray-50 p-6 w-full">
                <h2 className="text-[16px] font-bold text-gray-800 mb-4">{response.name || 'Student 1 Clinic'}</h2>
                
                <div className="flex items-center gap-2 mb-4">
                    <span className="font-bold text-gray-800 text-[14px]">Clinic code:</span>
                    <span className="bg-[#eef1f5] text-gray-700 px-2 py-0.5 rounded-md font-medium text-[13px]">
                        {response.code || response.clinicCode || 'STUD-01'}
                    </span>
                </div>

                <p className="text-[#8c9bab] text-[13px] font-medium mb-6">
                    Share this code with patients, doctors, and receptionists so they can register and join your clinic.
                </p>
                <div className="text-gray-600 font-medium text-[13px]">
                    Users: {response.userCount} <span className="mx-1 font-bold text-gray-400">·</span> Appointments: {response.appointmentCount}
                </div>
            </div>
        </div>
    )
}
