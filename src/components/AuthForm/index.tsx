import Button from "../Button";
import Input from "../Input";

type propsAuth = {
  signUp: boolean;
};
export const AuthForm = ({ signUp }: propsAuth) => {
  return (
    <form className="bg-dark-700 flex flex-col     justify-center items-center  p-16 gap-8">
      <h2>{signUp ? "Crie sua conta" : "Faça login"}</h2>
      {signUp && <Input type="text" label="Seu nome" name="name" />}
      <Input type="email" label="Email" name="email" />
      <Input type="password" label="Senha" name="password" />
      <Button
        color="tomato-dark"
        size="medium"
        title={signUp ? "Criar conta" : "entra"}
      />
    </form>
  );
};
