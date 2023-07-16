/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/router";
import Button from "../Button";
import Input from "../Input";
import { useForm, FormProvider } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { signIn } from "next-auth/react";

type propsAuth = {
  signUp: boolean;
};

interface formValues {
  name: string;
  password: string;
  email: string;
}

export const AuthForm = ({ signUp }: propsAuth) => {
  const router = useRouter();
  const methods = useForm<formValues>();
  const { handleSubmit, setError } = methods;
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: formValues) => {
    try {
      if (signUp) {
        console.log("ok");
        const response = await axios.post(
          "http://127.0.0.1:5000/api/register",
          data
        );

        if (response.status === 201) {
          router.push("/login");
        }
      } else {
        const result = await signIn("credentials", {
          redirect: false,
          email: data.email,
          password: data.password,
          callbackUrl: "/",
        });
        console.log(result);
        if (result?.status === 200) {
          router.push("/");
        }
        if (result?.status === 401) {
          setTimeout(() => {
            setLoading(false);
            setError("password", { message: "Email ou senha Incorreto" });
            setError("email", { message: "Email ou senha Incorreto" });
          }, 500);
        }
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:shadow-2xl lg:shadow-dark-800 rounded relative max-w-[29.8rem] w-full  flex flex-col font-poppins justify-center items-center p-10 lg:p-16 lg:bg-dark-700 gap-8">
          <h2 className="text-xl text-light-100 hidden lg:block">
            {signUp ? "Crie sua conta" : "Faça login"}
          </h2>
          {signUp && (
            <>
              <Input
                type="text"
                label="Seu nome"
                name="name"
                minLength={2}
                placeholder="Exemplo: Maria da Silva"
                required={true}
              />
            </>
          )}
          <Input
            type="email"
            label="Email"
            name="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            required={true}
          />
          <Input
            minLength={6}
            type="password"
            label="Senha"
            name="password"
            placeholder="No mínimo 6 caracteres"
            required={true}
          />

          <Button
            className="w-full"
            color="tomato-100"
            size="medium"
            title={signUp ? "Criar conta" : "Entra na conta"}
            loading={loading}
          />
          <span className="hover:underline text-light-100 font-medium">
            <a href={signUp ? "/login" : "/registrer"}>
              {signUp ? "Já tenho uma conta" : "Criar uma conta"}
            </a>
          </span>
        </div>
      </form>
    </FormProvider>
  );
};
