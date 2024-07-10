'use server'

import { signIn } from "@/auth"
import { AuthError, CredentialsSignin } from "next-auth"

import { Truculenta } from "next/font/google"
import { redirect } from "next/navigation"



interface loginProps {
    email: string,
    password: string,
}

export default async function login(data: loginProps) {
    console.log('data: ', data)
  
try{
    await signIn('credentials', data)
}catch (error) {
    redirect('/auth/login-server/error')
  }
}