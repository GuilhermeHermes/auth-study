import Image from "next/image";
import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button";


export default function Home() {
  return (<main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
    <div className="space-y-6 text-center gap-11">
      <h1 className="text-6xl font-semibold text-white drop-shadow-md">
       🔐 AUTH
      </h1>
      <p className='text-white text-lg'>A simple authentication service</p>
      <LoginButton route="/api/auth/signin">
      <Button variant='outline'>Login nativo</Button>
      </LoginButton>
      <LoginButton route="/login-server">
      <Button variant='outline'>Login server components</Button>
      </LoginButton>
      <LoginButton route="/client-login">
      <Button variant='outline'>Login client components</Button>
      </LoginButton>
      <LoginButton route="/register">
      <Button variant='outline'>Register</Button>
      </LoginButton>
    </div>
  </main>
  );
}
