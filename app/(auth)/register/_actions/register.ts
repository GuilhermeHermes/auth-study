'use server'
import prisma from '@/lib/db'
import { genSaltSync, hashSync } from "bcrypt-ts"
import { redirect } from 'next/navigation'

interface RegisterData {
  email: string
  password: string
  name: string
}

export default async function register(data: RegisterData){
  try {
    console.log('data: ', data)

  const { email, password: plainPassword, name } = data
  const password = hashSync(plainPassword, genSaltSync(10))

  if (!email || !password || !name) {
    throw new Error('All fields are required')
  }

  const userExists = await prisma.user.findUnique({
    where: { email },
  })

  if (userExists) {
    throw new Error('User already exists')
  }

  const user = await prisma.user.create({
    data: {
      email: email,
      password: password,
      name: name,
    },
  })
  console.log('user: ', user)

    } catch (error) {
    console.error(error)
    throw new Error('Failed to register')
    }
}
