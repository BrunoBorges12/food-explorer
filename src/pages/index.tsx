/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { CarrouselSection } from "@/components/CarrouselSection";
import { Card } from "@/components/CarrouselSection/components/Card";
import { Container } from "@/components/Container";
import { NavBar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <NavBar admin={true} />
      <Container className="overflow-hidden z-50 h-screen w-full pt-40  max-w-[1800px] ">
        <CarrouselSection />
      </Container>
    </>
  );
}
