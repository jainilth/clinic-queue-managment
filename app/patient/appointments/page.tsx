import React from 'react'
import { GetAllAppointment } from '@/app/service/patient.service'

async function MyAppointment() {
    const response = await GetAllAppointment()

    if (response?.error) {
        return (
            <div className="p-8">
                <h1 className="text-red-500 font-medium">Error: {response.error}</h1>
            </div>
        )
    }

    const formatDate = (dateString: string) => {
        if (!dateString) return '—';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    }

    return (
        <div className="w-full max-w-5xl">
            <h1 className="text-[20px] font-bold text-[#167d6a] mb-6">My Appointments</h1>

            <div className="bg-white rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.06)] border border-gray-50 w-full overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="py-4 px-6 text-[13px] font-bold text-gray-600 font-sans">Date</th>
                                <th className="py-4 px-6 text-[13px] font-bold text-gray-600 font-sans">Time</th>
                                <th className="py-4 px-6 text-[13px] font-bold text-gray-600 font-sans">Token</th>
                                <th className="py-4 px-6 text-[13px] font-bold text-gray-600 font-sans">Status</th>
                                <th className="py-4 px-6 text-[13px] font-bold text-gray-600 font-sans">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {response?.map((appointment: any) => (
                                <tr key={appointment.id || appointment._id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 px-6 text-[14px] text-gray-800">
                                        {formatDate(appointment.appointmentDate)}
                                    </td>
                                    <td className="py-4 px-6 text-[14px] text-gray-800">
                                        {appointment.timeSlot || '—'}
                                    </td>
                                    <td className="py-4 px-6 text-[14px] text-gray-800">
                                        {appointment.token || '1'}
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`px-2.5 py-1 rounded-md text-[12px] font-medium ${
                                            appointment.status === 'waiting' || !appointment.status 
                                            ? 'bg-[#fef3c7] text-[#b45309]' 
                                            : appointment.status === 'completed'
                                            ? 'bg-[#dcfce7] text-[#166534]'
                                            : 'bg-gray-100 text-gray-800'
                                        }`}>
                                            {appointment.status || 'waiting'}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <button className="bg-[#167d6a] hover:bg-[#137466] text-white px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors shadow-sm whitespace-nowrap">
                                            Medicines & report
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            
                            {/* Fallback empty state */}
                            {(!response || response.length === 0) && (
                                <tr>
                                    <td colSpan={5} className="py-8 text-center text-sm text-gray-500">
                                        No appointments found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyAppointment
