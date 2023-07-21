/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { CarrouselSection } from "@/components/CarrouselSection";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { list } from "postcss";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:5000/api/products");
      const json = await response.json();
      setProducts(json);
    };

    fetchData();
  }, []);

  const router = useRouter();
  const { status } = useSession();
  if (status === "loading") return null;
  if (status === "unauthenticated") router.push("login");
  else {
    return (
      <>
        <NavBar />
        <Container className="overflow-hidden z-50 w-full lg:pt-40  max-w-[1800px] ">
          <CarrouselSection
            title="Refeições"
            type="refeicao"
            products={products}
          />
          <CarrouselSection
            title="Sobremesas"
            type="sobremesa"
            products={products}
          />
        </Container>
        <Footer />
      </>
    );
  }
}
