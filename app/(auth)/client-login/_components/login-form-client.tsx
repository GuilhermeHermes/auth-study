import { useState } from "react";
import { z } from "zod";
import { loginSchema } from "@/schemas/index";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { signIn } from "next-auth/react";

export default function LoginFormClient(){
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = (data: any) => {
    try {
      loginSchema.parse(data);
      setFormErrors({ email: "", password: "" });
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: any = {};
        error.errors.forEach((err) => {
          const field = err.path.join(".");
          fieldErrors[field] = err.message;
        });
        setFormErrors(fieldErrors);
      }
      return false;
    }
  };

  function handleSubmit  (e: React.FormEvent<HTMLFormElement>)  {
    e.preventDefault();
    const isValid = validateForm(formData);
    if (isValid) {
      const formData = new FormData(e.currentTarget) ;
      const email = formData.get('email');
      const password = formData.get('password');

      signIn('credentials', { email, password, redirect: false, callbackUrl: '/'}).then(res => {
        console.log('response: ', res)
        
      })

      // Faça o que for necessário com os dados validados (enviar para servidor, etc)
     
    } else {
      console.log("Formulário inválido. Corrija os erros.");
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonlabel="Don't have an account?"
      backButtonHref="/register"
      showSocial
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="johndoe@example.com"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
        </div>
        <div className="space-y-4">
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="******"
            value={formData.password}
            onChange={handleInputChange}
          />
          {formErrors.password && <p className="text-red-500">{formErrors.password}</p>}
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-center p">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </CardWrapper>
  );
};


