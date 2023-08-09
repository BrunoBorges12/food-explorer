import { Container } from "@/components/Container";
import { NavBar } from "@/components/Navbar";
import { Product } from "@/components/Product";
import Link from "next/link";
import { RxCaretLeft } from "react-icons/rx";
import { getSession } from "next-auth/react";
import { product } from "../../types/products";
import getProduct from "@/fetch/product";
import { GetServerSideProps } from "next";
import { Footer } from "@/components/Footer";

export default function ProductPage({ product, id }: product) {
  return (
    <>
      <NavBar />
      <Container>
        <div className=" py-32">
          <Link href={"/"}>
            <div className=" text-light-100 flex items-center cursor-pointer">
              <RxCaretLeft className=" w-10 h-10" />
              <span className="  font-bold leading-160% text-lg">Volta</span>
            </div>
          </Link>
          <Product id={id} product={product} />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const slug = context?.params?.slug && context?.params?.slug[0]; // Use `context.params` to get dynamic params
  const product = await getProduct(session?.acessToken, slug);
  // Pass data to the page via props
  return { props: { product, id: slug } };
};
