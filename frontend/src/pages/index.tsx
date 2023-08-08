import { CarrouselSection } from "@/components/CarrouselSection";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import getProducts from "@/fetch/products";
import { GetSessionParams, getSession } from "next-auth/react";
import { product } from "../../types/products";

export default function Home({ products }: product) {
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

export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  // Fetch data from external API
  const session = await getSession(context);
  const products = await getProducts(session?.acessToken);
  // Pass data to the page via props
  return { props: { products } };
}
