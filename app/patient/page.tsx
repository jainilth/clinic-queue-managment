import React from 'react';
import Link from 'next/link';

export default function PatientDashboard() {
    return (
        <div className="w-full max-w-4xl max-w-[800px]">
            <h1 className="text-[20px] font-bold text-[#167d6a] mb-6">Patient Dashboard</h1>

            <div className="bg-white rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.06)] border border-gray-50 p-6 w-full">
                <h2 className="text-[16px] font-bold text-gray-800 mb-3">Welcome</h2>
                
                <p className="text-gray-500 text-[14px] font-medium mb-6">
                    Use the menu to book an appointment, view your appointments, prescriptions, or medical reports.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                    <Link href="/patient/book-appointment" className="bg-[#167d6a] hover:bg-[#137466] text-white px-4 py-2 rounded-lg text-[13px] font-medium transition-colors">
                        Book Appointment
                    </Link>
                    <Link href="/patient/appointments" className="bg-[#eef1f5] hover:bg-[#e2e8f0] text-gray-700 px-4 py-2 rounded-lg text-[13px] font-medium transition-colors">
                        My Appointments
                    </Link>
                    <Link href="/patient/prescriptions" className="bg-[#eef1f5] hover:bg-[#e2e8f0] text-gray-700 px-4 py-2 rounded-lg text-[13px] font-medium transition-colors">
                        My Prescriptions
                    </Link>
                    <Link href="/patient/reports" className="bg-[#eef1f5] hover:bg-[#e2e8f0] text-gray-700 px-4 py-2 rounded-lg text-[13px] font-medium transition-colors">
                        My Reports
                    </Link>
                </div>
            </div>
        </div>
    );
}
