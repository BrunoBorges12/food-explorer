import Button from "../Button";
import Input from "../Input";

type propsAuth = {
  signUp: boolean;
};
export const AuthForm = ({ signUp }: propsAuth) => {
  return (
    <form className=" shadow-2xl  shadow-dark-800 rounded bg-dark-700 flex flex-col   font-poppins   justify-center items-center  p-16 gap-8">
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
    </form>
  );
};
