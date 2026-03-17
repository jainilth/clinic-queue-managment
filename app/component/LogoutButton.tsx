"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    async function handleLogout() {
        await fetch("/api/logout", {
            method: "POST",
        });

        router.push("/login");
        router.refresh(); // optional: clear cache
    }

    return (
        <button onClick={handleLogout} className="text-sm font-medium bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-md transition-colors border border-transparent">
            Logout
        </button>
    );
}
