import React from 'react';
import { SignOut } from '@/components/auth/logout-button';
import { auth } from '@/auth';
import { redirect, useRouter } from 'next/navigation'

const DashboardPage: React.FC = async () => {
    
   
    const session = await auth()
    if(!session) {
        redirect('/')
    }
    console.log('session: ', session)
    return (
        <main className="flex h-full min-h-screen bg-gray-100">
            <aside className="w-64 bg-blue-800 text-white p-4">
                <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
                <nav className="space-y-4">
                    <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Home</a>
                    <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Profile</a>
                    <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Settings</a>
                </nav>
            </aside>
            <section className="flex-1 p-6">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-semibold">Dashboard Overview</h1>
                    <p>Welcome back, {session && session.user?.name}!</p>
                    <SignOut />
                </header>
                <div className="space-y-6">
                    {/* Add your dashboard content here */}
                    <div className="p-4 bg-white rounded shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Section 1</h2>
                        <p>This is the first section of your dashboard content.</p>
                    </div>
                    <div className="p-4 bg-white rounded shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Section 2</h2>
                        <p>This is the second section of your dashboard content.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DashboardPage;
