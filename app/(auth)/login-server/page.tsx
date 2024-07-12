
;

import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"
import { useSession } from "next-auth/react";

  import { FaSpinner } from 'react-icons/fa';
import { LoginForm } from "./_components/login-form";

export default function LoginServer() {
   
    
    return (
        <div>
        <LoginForm />
        </div>
    );
}

