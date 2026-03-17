'use server'

import { getSession } from "@/lib/auth"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function AddAppointment(fromData: FormData) {
    const session = await getSession()

    if (!session?.accessToken) {
        return { error: "Unauthorized" }
    }

    const appointmentDate = fromData.get("date") as string
    const timeSlot = fromData.get("time") as string

    const data = { appointmentDate, timeSlot }

    const res = await fetch(`${process.env.API_URL}/appointments`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${session.accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    if (!res.ok) {
        const errorData = await res.json()
        console.log('API Error:', errorData)
        alert(errorData.error)
    }

    revalidatePath('/patient/appointments')
    redirect('/patient/appointments')
}


export async function GetAllAppointment() {
    const session = await getSession()

    if (!session?.accessToken) {
        return { error: 'Unauthorized' }
    }

    const res = await fetch(`${process.env.API_URL}/appointments/my`, {
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
