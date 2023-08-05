import { AuthForm } from "@/components/AuthForm";
import { Logo } from "@/components/Logo";

export default function Login() {
  return (
    <div className="  w-screen h-screen overflow-hidden   relative    bg-dark-400  flex items-center  mt-28 flex-col gap-7   lg:justify-around lg:flex-row lg:mt-0">
      <div>
        <Logo size="medium" className="" />
      </div>
      <AuthForm signUp={false} />
    </div>
  );
}
