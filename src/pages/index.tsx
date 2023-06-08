/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Container } from "@/components/Container";
import { NavBar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <NavBar admin={true} />;
      <Container>
        <div className=" my-44  text-light-100 relative  h-full w-full   max-w-full select-none">
          <div className="  rounded-lg banner w-full h-[160px]  flex lg:h-[260px]">
            <div className="  w-1/2 lg:w-5/12 ">
              <img
                src="/doces.png  "
                className=" bannerimg  top-[-52px] left-[-20px] relative md:w-[332px] lg:left-0 lg:top-[-110px] lg:h-auto lg:w-[632px]
              "
              ></img>
            </div>
            <div className="  flex flex-col justify-center font-poppins lg:m-0  lg:items-center ">
              <h1 className=" text-lg lg:text-2xl ">Sabores inigualáveis</h1>
              <h2 className=" text-base">
                Sinta o cuidado do preparo com ingredientes selecionados
              </h2>
            </div>
          </div>
          <div className=" z-50 h-full  w-full absolute  bg-dark-400 "></div>
        </div>
        <div className="z-50 text-light-100 relative">oi</div>
      </Container>
    </>
  );
}
