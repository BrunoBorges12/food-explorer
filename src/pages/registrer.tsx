import { AuthForm } from "@/components/AuthForm";
import { Logo } from "@/components/Logo";

export default function Login() {
  return (
    <div className="  w-screen h-screen overflow-hidden   relative    bg-dark-400  flex items-center justify-center  flex-col  mt-10 lg:justify-around lg:mt-0 lg:flex-row">
      <Logo size="medium" />
      <AuthForm signUp={true} />
    </div>
  );
}
