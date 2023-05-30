import { AuthForm } from "@/components/AuthForm";

export default function Home() {
  return (
    <div className="  w-screen h-screen  bg-dark-400  flex   flex-col items-center justify-center">
      <AuthForm signUp={false} />
    </div>
  );
}
