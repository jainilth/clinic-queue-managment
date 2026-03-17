import { SessionPlayload } from "@/lib/defination"
import { encrypt } from "@/lib/session"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const { email, password } = await req.json()

    const res = await fetch(`${process.env.API_URL}/auth/login`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        }
    )

    if (!res.ok) {
        return NextResponse.json(
            { message: "Invalid credentials" },
            { status: 401 }
        )
    }

    const user = await res.json()

    
    const payload: SessionPlayload = {
        id: user.user.id,
        email: user.user.email,
        role:user.user.role,
        accessToken:user.token,
        expiresAt: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
    }
    
    // console.log(payload)

    const token=await encrypt(payload)

    const response=NextResponse.json({sucess:true,role:user.user.role})

    response.cookies.set("session",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        path:"/",
    })

    return response
    
}