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
  password: number;
  email: string;
}
export const AuthForm = ({ signUp }: propsAuth) => {
  const router = useRouter();
  const methods = useForm<formValues>();
  const onSubmit = async (data: formValues) => {
    try {
      if (signUp) {
        //127.0.0.1:8000/register
        const response = await axios.post(
          "http://127.0.0.1:8000/register",
          data
        );
        if (response.status === 200) {
          router.push("/login");
        }
      } else {
        const response = await axios.post("/api/login", data);
        console.log(response.status);
        if (response.status === 200) {
          console.log("caiu aqui");

          router.push("/");
        }
      }

      // Lógica adicional após o login bem-sucedido
    } catch (error: any) {
      console.log(error.message);
      // Lógica para lidar com erros de login
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className=" shadow-2xl  shadow-dark-800 rounded relative max-w-[29.8rem] w-full bg-dark-700 flex flex-col   font-poppins   justify-center items-center  p-16 gap-8">
          <h2 className=" text-xl text-light-100">
            {signUp ? "Crie sua conta" : "Faça login"}
          </h2>
          {signUp && (
            <Input
              type="text"
              label="Seu nome"
              name="name"
              placeholder="Exemplo: Maria da Silva"
            />
          )}
          <Input
            type="email"
            label="Email"
            name="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
          <Input
            type="password"
            label="Senha"
            name="password"
            placeholder="No mínimo 6 caracteres"
          />
          <Button
            color="tomato-dark"
            size="medium"
            title={signUp ? "Criar conta" : "entra"}
          />
          <span className="  hover:underline  text-light-100 font-medium">
            <a href="">{signUp ? "Já tenho uma conta" : "Criar um conta"}</a>
          </span>
        </div>
      </form>
    </FormProvider>
  );
};
