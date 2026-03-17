import React from 'react';
import Link from 'next/link';
import LogoutButton from '../component/LogoutButton';
import { getSession } from '@/lib/auth';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-900">
      {/* Top Navigation */}
      <header className="bg-[#137466] text-white py-3 px-6 shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Context */}
          <div className="flex items-baseline gap-3">
            <h1 className="text-xl font-bold tracking-tight">Clinic Queue</h1>
            <span className="text-sm font-medium text-[#e0efec]">Thummar Jainil Sanjaybhai Clinic</span>
            <span className="text-[11px] font-semibold bg-white/20 px-2 py-0.5 rounded-full ml-1">
              admin
            </span>
          </div>

          {/* Navigation Links & Actions */}
          <nav className="flex items-center gap-6">
            <Link
              href="/admin"
              className="text-sm font-medium text-white hover:text-[#e0efec] transition-colors"
            >
              My Clinic
            </Link>
            <Link
              href="/admin/users"
              className="text-sm font-medium text-white hover:text-[#e0efec] transition-colors"
            >
              Users
            </Link>
            <LogoutButton/>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}
