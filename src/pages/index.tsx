/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Container } from "@/components/Container";
import { NavBar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <NavBar admin={true} />;
      <Container>
        <div className=" overflow-visible  my-44  text-light-100 relative  w-full  h-[260px]">
          <div className=" w-[1120px] h-[260px] relative rounded-lg banner bg-[linear-gradient(180deg_#091E26_0%_#00131C_100%)] flex">
            <div className=" w-1/2">
              <img
                src="/doces.png"
                className=" bannerimg
              "
              ></img>
            </div>
            <div className=" flex flex-col justify-center items-center w-1/2">
              <h1 className=" text-2xl font-poppins">Sabores inigualáveis</h1>
              <h2>Sinta o cuidado do preparo com ingredientes selecionados</h2>
            </div>
          </div>
          <div className=" z-50 h-full  w-full absolute  bg-dark-400 "></div>
        </div>
        <div className="z-50 text-light-100 relative">oi</div>
      </Container>
    </>
  );
}
