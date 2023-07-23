/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { FormPlate } from "@/components/FormPlate";
import { NavBar } from "@/components/Navbar";

import { Footer } from "@/components/Footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const { status } = useSession();
  if (status === "loading") return null;
  if (status === "unauthenticated") router.push("login");
  else {
    return (
      <>
        <NavBar />
        <FormPlate />
        <Footer />
      </>
    );
  }
}
