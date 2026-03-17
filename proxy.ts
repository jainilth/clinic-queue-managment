import { NextRequest, NextResponse } from "next/server"
import { decrypt } from "./lib/session"

const protectedRoute = ['/', '/admin', '/doctor', '/patient', '/receptionist']
const publicRoute = ['/login']

const rolePaths: Record<string, string> = {
    'admin': '/admin',
    'doctor': '/doctor',
    'patient': '/patient',
    'receptionist': '/receptionist'
}

export default async function proxy(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoute.includes(path)
    const isPublicRoute = publicRoute.includes(path)

    const cookie = req.cookies.get("session")?.value
    const session = await decrypt(cookie)

    if (isProtectedRoute && !session?.email) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    if (path === '/' && session?.role) {
        const userRolePath = rolePaths[session.role]
        if (userRolePath) {
            return NextResponse.redirect(new URL(userRolePath, req.nextUrl))
        }
    }

    if (isPublicRoute && session?.email) {
        const userRolePath = rolePaths[session.role]
        if (userRolePath) {
            return NextResponse.redirect(new URL(userRolePath, req.nextUrl))
        }
    }

    if (session?.role) {
        const userRolePath = rolePaths[session.role]
        if (!userRolePath) {
            return NextResponse.redirect(new URL('/login', req.nextUrl))
        }
        if (path.startsWith('/admin') && session.role !== 'admin') {
            return NextResponse.redirect(new URL(userRolePath, req.nextUrl))
        }
        if (path.startsWith('/doctor') && session.role !== 'doctor') {
            return NextResponse.redirect(new URL(userRolePath, req.nextUrl))
        }
        if (path.startsWith('/patient') && session.role !== 'patient') {
            return NextResponse.redirect(new URL(userRolePath, req.nextUrl))
        }
        if (path.startsWith('/receptionist') && session.role !== 'receptionist') {
            return NextResponse.redirect(new URL(userRolePath, req.nextUrl))
        }
    }

}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
