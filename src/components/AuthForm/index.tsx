/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/router";
import Button from "../Button";
import Input from "../Input";
import { useForm, FormProvider } from "react-hook-form";
import axios from "axios";

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
        const response = await axios.post("/api/login", data);
        if (response.status === 200) {
          router.push("/");
        }
      }
    } catch (error: any) {
      if (error.response.status === 409) {
        setError("email", { message: "Esse email já existe" });
      }
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow-2xl shadow-dark-800 rounded relative max-w-[29.8rem] w-full bg-dark-700 flex flex-col font-poppins justify-center items-center p-16 gap-8">
          <h2 className="text-xl text-light-100">
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
            title={signUp ? "Criar conta" : "Entrar"}
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
