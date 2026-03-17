import React from 'react';

export default function ReceptionistQueue() {
    return (
        <div className="w-full max-w-5xl mx-auto">
            <h1 className="text-[20px] font-bold text-[#167d6a] mb-6">Queue (manage)</h1>

            {/* Date Filter Card */}
            <div className="bg-white rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.06)] border border-gray-50 p-6 w-full mb-6 max-w-4xl">
                <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Date</label>
                    <input 
                        type="date" 
                        defaultValue="2026-03-16"
                        className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#167d6a]/40 focus:border-[#167d6a] transition-all text-gray-800"
                    />
                </div>
            </div>

            {/* Queue Table Card */}
            <div className="bg-white rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.06)] border border-gray-50 w-full overflow-hidden max-w-4xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="py-4 px-6 text-[13px] font-bold text-gray-600 font-sans">Token</th>
                                <th className="py-4 px-6 text-[13px] font-bold text-gray-600 font-sans">Patient</th>
                                <th className="py-4 px-6 text-[13px] font-bold text-gray-600 font-sans">Phone</th>
                                <th className="py-4 px-6 text-[13px] font-bold text-gray-600 font-sans">Time slot</th>
                                <th className="py-4 px-6 text-[13px] font-bold text-gray-600 font-sans">Status</th>
                                <th className="py-4 px-6 text-[13px] font-bold text-gray-600 font-sans">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 px-6 text-[14px] text-gray-800">1</td>
                                <td className="py-4 px-6 text-[14px] text-gray-800">arjun pat</td>
                                <td className="py-4 px-6 text-[14px] text-gray-400 font-medium">—</td>
                                <td className="py-4 px-6 text-[14px] text-gray-800">15:45-16:00</td>
                                <td className="py-4 px-6">
                                    <span className="bg-[#fef3c7] text-[#b45309] font-medium px-2.5 py-1 rounded-md text-[12px]">
                                        waiting
                                    </span>
                                </td>
                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-2">
                                        <button className="bg-[#167d6a] hover:bg-[#137466] text-white px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors shadow-sm">
                                            In progress
                                        </button>
                                        <button className="bg-[#f1f5f9] hover:bg-[#e2e8f0] text-gray-700 px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors">
                                            Skip
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
