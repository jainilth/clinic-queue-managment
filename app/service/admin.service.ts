import { getSession } from '@/lib/auth'

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

export async function GetAllUsers(){
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