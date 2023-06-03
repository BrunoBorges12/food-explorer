/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/router";
import Button from "../Button";
import Input from "../Input";
import { useForm, FormProvider } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

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
        const response = await axios.post(
          "http://127.0.0.1:8000/register",
          data
        );

        if (response.status === 200) {
          router.push("/login");
        }
      } else {
        console.log(process.env.NEXT_SERVER_API_URL);
        setLoading(true);
        const response = await axios.post(
          `${process.env.NEXT_SERVER_API_URL}/login`,
          data
        );
        if (response.status === 200) {
          router.push("/");
        }
      }
    } catch (error: any) {
      console.log(error);
      setTimeout(() => {
        setLoading(false);
        if (error.response.status === 401) {
          setError("password", { message: "Email ou senha Incorreto" });
          setError("email", { message: "Email ou senha Incorreto" });
        }
      }, 500);

      if (error.response.status === 409) {
        setError("email", { message: "Esse email já existe" });
      }
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
            type="password"
            label="Senha"
            name="password"
            placeholder="No mínimo 6 caracteres"
            required={true}
          />
          <Button
            color="tomato-dark"
            size="medium"
            title={signUp ? "Criar conta" : "criar conta"}
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
