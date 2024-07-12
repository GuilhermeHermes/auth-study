"use client"

import { useSession } from "next-auth/react";
import LoginFormClient from "./_components/login-form-client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AlertChangePage from "@/components/alerts/changePage";

  
export default function LoginClient() {
    const session = useSession();
    const router = useRouter();
    useEffect(() => {
        if (session.status === "authenticated") {
            const timer = setTimeout(() => {
                router.push('/dashboard'); 
            }, 1500); 

            return () => clearTimeout(timer);
        }
    }, [session.status, router]);


    if(session.status === "authenticated") {
        return (
            <AlertChangePage title="Authenticated!" description="Wait a moment... redirecting" />
        )
    }
    console.log('session: ', session)
    return (
        
        <div>
        <LoginFormClient />
        </div>
    );
}

