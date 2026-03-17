import { AddUser, GetAllUsers } from '../../service/admin.service'
async function UsersPage({ searchParams }: { searchParams: { error?: string } }) {
    const response = await GetAllUsers()

    if (response?.error) {
        return (
            <div className="p-8">
                <h1 className="text-red-500 font-medium">Error: {response.error}</h1>
            </div>
        )
    }

    return (
        <div className="w-full max-w-5xl">
            <h1 className="text-[20px] font-bold text-[#167d6a] mb-6">Clinic Users</h1>

            {/* Add User Card */}
            <div className="bg-white rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.06)] border border-gray-50 p-6 w-full mb-8">
                <h2 className="text-[16px] font-bold text-gray-800 mb-2">Add receptionist, doctor, or patient</h2>
                <p className="text-[#8c9bab] text-[13px] font-medium mb-6">
                    Create a user in your clinic. They will sign in with the email and password you set (no registration).
                    if you enter the email that is alreay in use then form will be not submit
                </p>

                <form action={AddUser} className="space-y-4" >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Name</label>
                            <input
                                name='name'
                                type="text"
                                placeholder="At least 3 characters"
                                required
                                minLength={3}
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#167d6a]/40 focus:border-[#167d6a] transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Email</label>
                            <input
                                name='email'
                                type="email"
                                required
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#167d6a]/40 focus:border-[#167d6a] transition-all"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Password</label>
                            <input
                                name='password'
                                type="password"
                                placeholder="Min 6 characters"
                                required
                                minLength={6}
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#167d6a]/40 focus:border-[#167d6a] transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Role</label>
                            <select name='role' required className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#167d6a]/40 focus:border-[#167d6a] transition-all bg-white appearance-none">
                                <option value="">Select a role</option>
                                <option value="patient">Patient</option>
                                <option value="receptionist">Receptionist</option>
                                <option value="doctor">Doctor</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Phone (optional)</label>
                            <input
                                name='phone'
                                type="tel"
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#167d6a]/40 focus:border-[#167d6a] transition-all"
                            />
                        </div>
                    </div>

                    <div className="pt-2">
                        <button type="submit" className="bg-[#167d6a] hover:bg-[#137466] text-white px-5 py-2 rounded-md text-[13px] font-medium transition-colors shadow-sm">
                            Add user
                        </button>
                    </div>
                </form>
            </div>

            {/* Users Table Card */}
            <div className="bg-white rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.06)] border border-gray-50 w-full overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-50">
                    <h2 className="text-[16px] font-bold text-gray-800">Users in this clinic</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="py-3 px-6 text-[13px] font-bold text-gray-600 font-sans">Name</th>
                                <th className="py-3 px-6 text-[13px] font-bold text-gray-600 font-sans">Email</th>
                                <th className="py-3 px-6 text-[13px] font-bold text-gray-600 font-sans">Role</th>
                                <th className="py-3 px-6 text-[13px] font-bold text-gray-600 font-sans">Phone</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {response?.map((user: any) => (
                                <tr key={user.id || user.email} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 px-6 text-[14px] text-gray-800">{user.name}</td>
                                    <td className="py-4 px-6 text-[14px] text-gray-600">{user.email}</td>
                                    <td className="py-4 px-6">
                                        <span className="bg-[#e0f2fe] text-[#0369a1] px-2 py-0.5 rounded text-[12px] font-medium capitalize">
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-[14px] text-gray-600">
                                        {user.phone ? user.phone : '—'}
                                    </td>
                                </tr>
                            ))}
                            {/* Fallback empty state if no users */}
                            {(!response || response.length === 0) && (
                                <tr>
                                    <td colSpan={4} className="py-8 text-center text-sm text-gray-500">
                                        No users found.
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

export default UsersPage
