/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { CarrouselSection } from "@/components/CarrouselSection";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { data } = useSession();
  useEffect(() => {
    // @ts-ignore

    if( data?.acessToken){

      const fetchData = async () => {
        const response = await fetch("http://127.0.0.1:5000/api/products",{
          headers:{
            // @ts-ignore
            'Authorization': 'Bearer ' + data?.acessToken,
            'content-Type':'application/json'
          }
        });
        const json = await response.json();
        setProducts(json);
      };
      fetchData();
    }

        // @ts-ignore


  }, [data?.acessToken]);

    return (
      <>
        <NavBar />
        <Container className="overflow-hidden z-50  w-full pt-14   max-w-[1800px] lg:pt-40 ">
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
