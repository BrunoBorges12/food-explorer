/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { FormPlate } from "@/components/FormPlate";
import { NavBar } from "@/components/Navbar";

import { Footer } from "@/components/Footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const { status, data } = useSession();
  if (status === "loading") return null;
  if (status === "unauthenticated") router.push("login");
  // @ts-ignore
  else if (data.role === "admin") {
    return (
      <>
        <NavBar />
        <FormPlate update={false} />
        <Footer />
      </>
    );
  } else {
    router.push("/");
    return <div>Não tem acesso babaca</div>;
  }
}
