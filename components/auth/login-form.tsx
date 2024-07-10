"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm} from "react-hook-form"
import { z } from "zod"
import { CardWrapper } from "./card-wrapper";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {loginSchema} from "@/schemas/index"
import { Button } from "@/components/ui/button"
import {FormError} from "@/components/form-error"
import {FormSuccess} from "@/components/form-success"
import login from "@/app/(auth)/login-server/_actions/login";

export const LoginForm = () => {
  
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async ( data: z.infer<typeof loginSchema>) => { 
    try {
      await login(data)
      // Exibir mensagem de sucesso ou redirecionar o usuário, por exemplo
    } catch (error: any) {
      throw new Error(error.message)
    }
}


  return (
    <CardWrapper
    headerLabel="Welcome back"
    backButtonlabel="Don't have an account?"
    backButtonHref="/register"
    showSocial>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@example.com" type="email" {...field}/>
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
                <Input placeholder="******" type="password" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={''} />
        <FormSuccess message={''} />
        <div className="flex justify-center p">
            <Button type="submit">Submit</Button>
          </div>
      </form>
    </Form>
    </CardWrapper>
  );
}

