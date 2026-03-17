import { GetAllUsers } from '@/app/service/admin.service'
import React from 'react'

async function UsersPage() {
    const response = await GetAllUsers()

    if (response?.error) {
        return (
            <div className="p-8">
                <h1 className="text-red-500 font-medium">Error: {response.error}</h1>
            </div>
        )
    }
    console.log(response)
    return (
        <div>
            <form>
                <h1>Add reception</h1>
                create a user in your clinic.they will sign in with the email and password you set(no registration)
            </form>
            <table>
                <tr>
                    <thead>
                        <th>name</th>
                        <th>email</th>
                        <th>role</th>
                        <th>phone</th>
                    </thead>
                    <tbody>
                        {response.map((user: any) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </tr>
            </table>
        </div>
    )
}

export default UsersPage
