/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Container } from "@/components/Container";
import { NavBar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <NavBar admin={true} />;
      <Container>
        <main className=" flex flex-col">
          <div className="  flex-col   relative mt-28  flex  items-center  w-full  text-center ">
            <img
              src="/doces.png  "
              className=" bannerimg w-[250px] absolute   top-[-7rem] lg:hidden
              "
            ></img>
            <div className="  text-light-100 relative  h-full w-full   max-w-full select-none lg:my-44 ">
              <div className="  rounded-lg banner w-full h-[120px]  flex lg:h-[260px]">
                <div className=" hidden lg:block  w-[46%] ">
                  <img
                    src="/doces.png  "
                    className=" bannerimg   hidden   relative lg:block lg:left-0 lg:top-[-110px] lg:h-auto lg:w-[610px] 
              "
                  ></img>
                </div>
                <div className="  flex flex-col justify-center w-full items-center font-poppins lg:m-0 tex  lg:items-center lg:w-1/2 ">
                  <h1 className=" text-base lg:text-2xl ">
                    Sabores inigualáveis
                  </h1>
                  <h2 className=" text-xs lg:text-sm">
                    Sinta o cuidado do preparo com ingredientes selecionados
                  </h2>
                </div>
              </div>
              <div className=" z-50 h-full  w-full absolute  bg-dark-400 "></div>
            </div>
          </div>
          <div className="z-50 text-light-100 relative ">oi</div>
        </main>
      </Container>
    </>
  );
}
