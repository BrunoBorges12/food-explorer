import { Container } from "@/components/Container";
import { NavBar } from "@/components/Navbar";
import { Product } from "@/components/Product";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RxCaretLeft } from "react-icons/rx";

export default function ProductPage() {
  const [product, setProduct] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (router.query.slug) {
        const response = await fetch(
          `http://127.0.0.1:5000/api/product/${router.query.slug[0]}`
        );
        const json = await response.json();
        setProduct(json);
      }
    };

    fetchData();
  }, [router]);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (router.query.slug) {
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
            <Product id={router.query.slug[0]} product={product} />
          </div>
        </Container>
      </>
    );
  }
}
