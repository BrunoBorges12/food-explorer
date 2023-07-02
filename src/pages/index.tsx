/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { CarrouselSection } from "@/components/CarrouselSection";
import { Container } from "@/components/Container";
import { NavBar } from "@/components/Navbar";
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
        <NavBar admin={true} />
        <Container className="overflow-hidden z-50 w-full lg:pt-40  max-w-[1800px] ">
          <CarrouselSection title="Refeições" />
        </Container>
      </>
    );
  }
}
