
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import prisma from "./lib/db"
import {compareSync} from "bcrypt-ts"
import { CredentialsSignin } from "@auth/core/errors"
import { z } from "zod"


const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password is required"),
})


export const { auth, handlers, signIn, signOut} = NextAuth({
  providers: [
    Credentials({
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
      try {
        const { email, password } = credentialsSchema.parse(credentials)

        const user = await prisma.user.findUnique({
          where: { email }
        })

        if (!user || !user.password) {
          throw new CredentialsSignin("Invalid credentials")
        }
        console.log('user: ', user)
        if (!compareSync(password, user.password)) {
          throw new CredentialsSignin("Invalid credentials")
        }

        return { id: user.id, name: user.name, email: user.email }
      } catch (error) {
        if (error instanceof z.ZodError) {
          throw new CredentialsSignin("Invalid input")
        }
        if (error instanceof CredentialsSignin) {
          
          throw error
        }
        console.error(error)
        return null
      }
    },
  }),GitHub,
],
})