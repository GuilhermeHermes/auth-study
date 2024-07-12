"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginSchema } from "@/schemas/index"
import { Button } from "@/components/ui/button"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import login from "@/app/(auth)/login-server/_actions/login"
import { useState } from "react"
import { CardWrapper } from "@/components/auth/card-wrapper"

export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    setErrorMessage(null)
    setSuccessMessage(null)

    try {
      await login(data)
      setSuccessMessage("Login successful!")

      
      // Exibir mensagem de sucesso ou redirecionar o usuário, por exemplo
    } catch (error: any) {
      console.error("Login failed:", error)
      setErrorMessage(error.message || "An unexpected error occurred. Please try again later.")
    }
  }

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonlabel="Don't have an account?"
      backButtonHref="/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@example.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="******" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {errorMessage && <FormError message={errorMessage} />}
          {successMessage && <FormSuccess message={successMessage} />}
          <div className="flex justify-center p">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  )
}
