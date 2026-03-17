'use server'

import { getSession } from '@/lib/auth'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function GetMyClinic() {
    const session = await getSession()

    if (!session?.accessToken) {
        return { error: 'Unauthorized' }
    }

    const res = await fetch(`${process.env.API_URL}/admin/clinic`, {
        headers: {
            'Authorization': `Bearer ${session.accessToken}`,
            'Content-Type': 'application/json'
        }
    })

    if (!res.ok) {
        return { error: 'Failed to fetch clinic data' }
    }

    return await res.json()
}

export async function GetAllUsers() {
    const session = await getSession()

    if (!session?.accessToken) {
        return { error: 'Unauthorized' }
    }

    const res = await fetch(`${process.env.API_URL}/admin/users`, {
        headers: {
            'Authorization': `Bearer ${session.accessToken}`,
            'Content-Type': 'application/json'
        }
    })

    if (!res.ok) {
        return { error: 'Failed to fetch clinic data' }
    }

    return await res.json()
}

export async function AddUser(formData: FormData) {
    const session = await getSession()

    if (!session?.accessToken) {
        return { error: 'Unauthorized' }
    }
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const role = formData.get('role') as string
    const phone = formData.get('phone') as string

    const data = { name, email, password, role, phone }

    const res = await fetch(`${process.env.API_URL}/admin/users`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${session.accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    console.log(res)
    if (!res.ok) {
        const errorData = await res.json()
        console.log('API Error:', errorData)
        alert(errorData.error)
    }

    revalidatePath('/admin/users')
}
