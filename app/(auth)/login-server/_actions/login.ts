'use server'
import { signIn } from "@/auth"

interface LoginProps {
    email: string,
    password: string,
}

export default async function login(data: LoginProps) {
    console.log('data: ', data)

    try {
        const res = await signIn('credentials', data);
        console.log('response: ', res);
    } catch (error) {
        console.error('Login error: ', error);
        throw error;
    }

   
}
