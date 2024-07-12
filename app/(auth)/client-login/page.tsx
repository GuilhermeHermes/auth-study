"use client"

import { useSession } from "next-auth/react";
import LoginFormClient from "./_components/login-form-client";
import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"
  import { FaSpinner } from 'react-icons/fa';
import { useEffect } from "react";
import { useRouter } from "next/navigation";

  
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
            <Alert>
            <FaSpinner className="animate-spin h-4 w-4" />
            <AlertTitle>Authenticated!</AlertTitle>
            <AlertDescription>
              Wait a moment... redirecting
            </AlertDescription>
          </Alert>
          
        )
    }
    console.log('session: ', session)
    return (
        
        <div>
        <LoginFormClient />
        </div>
    );
}

