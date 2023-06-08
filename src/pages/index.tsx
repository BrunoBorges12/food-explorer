/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Container } from "@/components/Container";
import { NavBar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <NavBar admin={true} />;
      <Container>
        <div className=" overflow-visible  my-44  text-light-100 relative  w-full  h-[260px] select-none">
          <div className=" relative rounded-lg banner w-full h-[120px] lg:w-[1120px]  lg:h-[260px] flex">
            <div className="  w-1/2 lg:w-1/2">
              <img
                src="/doces.png  "
                className=" bannerimg w-[129px] left-[-10px] h-[272px] top-[-44px] lg:left-[-48px] lg:top-[-171px] lg:h-auto lg:w-[632px]
              "
              ></img>
            </div>
            <div className="  flex flex-col justify-center w-full lg:w-1/2 lg:m-0  lg:items-center ">
              <h1 className=" text-sm lg:text-2xl font-poppins">
                Sabores inigualáveis
              </h1>
              <h2 className=" text-xs">
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
