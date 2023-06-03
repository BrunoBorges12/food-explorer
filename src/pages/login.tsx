import { AuthForm } from "@/components/AuthForm";
import { Logo } from "@/components/Logo";

export default function Login() {
  return (
    <div className="  w-screen h-screen    bg-dark-400  flex items-center justify-around">
      <Logo size="medium" />
      <AuthForm signUp={false} />
    </div>
  );
}
