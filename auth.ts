
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { ZodError } from "zod"
import prisma from "./lib/db"
import {compareSync} from "bcrypt-ts"

export const { auth, handlers, signIn} = NextAuth({
  providers: [Credentials({
    credentials: {
        email: {label: "Email", type: "emails" },
        password: {label: "password", type: "password" },
  },
  authorize: async (credentials) => {
    try {
      // Log de credenciais recebidas
      console.log('Received credentials:', credentials.email);
      console.log('Received credentials:', credentials.password);
      const email = credentials.email as string;
      const password = credentials.password as string;

      if (!email || !password) {
        return null;
      }


      const user = await prisma.user.findUnique({
        where: {email:email}
      })
      console.log('user: ', user)
      if (!user) {

        throw new Error("User not found.")

      }
      
    
    
      if(compareSync(password, user.password ?? '')){
        return {id: user.id, name: user.name, email: user.email}
      }else{
        throw new Error("Credentials do not match")
      }

      
    }catch (error) {
            console.error(error) 
            throw new Error('Failed to login')
    }
        },
}),
  ]
})