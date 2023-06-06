import Button from "../Button";
import { Logo } from "../Logo";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { IconLogout } from "./components/IconLogout";
import { useState } from "react";
import classNames from "classnames";
type propsNavbar = {
  admin?: boolean;
};
export const NavBar = ({ admin }: propsNavbar) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="  w-full  bg-dark-600 lg:items-center    ">
      <div className="   flex  gap-8  px-7  z-50 bg-dark-600  relative  py-6  lg:items-center lg:justify-center  lg:px-32">
        <div className="flex items-center w-full justify-between lg:gap-16 lg:justify-normal relative">
          {!isOpen ? (
            <>
              <GiHamburgerMenu
                onClick={() => setIsOpen(true)}
                className="lg:hidden w-[30px] h-[24px] text-light-100"
              />
              <Logo size="small" className="" admin={admin} />
              <div className=" hidden   lg:block">
                <p className=" flex  items-center  py-3   rounded-md  bg-dark-900 lg:w-[581px] lg:h-[48px] lg:relative ">
                  <BsSearch className=" lg:w-5 lg:h-5 text-light-400 ml-[101px]  mr-5" />
                  <input
                    placeholder="Busque por pratos ou ingredientes"
                    className="border-none   focus-within:outline-none  text-light-100 hover:border-none bg-transparent"
                    type="text"
                  />
                </p>
              </div>
              {!admin && (
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 33 32"
                  fill="none"
                  className="lg:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.53906 14C8.53906 13.4477 8.98678 13 9.53906 13H22.5391C23.0913 13 23.5391 13.4477 23.5391 14C23.5391 14.5523 23.0913 15 22.5391 15H9.53906C8.98678 15 8.53906 14.5523 8.53906 14Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.53906 18C8.53906 17.4477 8.98678 17 9.53906 17H22.5391C23.0913 17 23.5391 17.4477 23.5391 18C23.5391 18.5523 23.0913 19 22.5391 19H9.53906C8.98678 19 8.53906 18.5523 8.53906 18Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.62485 6.58579C3.99992 6.21071 4.50863 6 5.03906 6H27.0391C27.5695 6 28.0782 6.21071 28.4533 6.58579C28.8284 6.96086 29.0391 7.46957 29.0391 8V27C29.0391 27.3466 28.8596 27.6684 28.5648 27.8507C28.27 28.0329 27.9018 28.0494 27.5918 27.8944L24.0391 26.118L20.4863 27.8944C20.2047 28.0352 19.8734 28.0352 19.5919 27.8944L16.0391 26.118L12.4863 27.8944C12.2047 28.0352 11.8734 28.0352 11.5918 27.8944L8.03906 26.118L4.48628 27.8944C4.17629 28.0494 3.80815 28.0329 3.51333 27.8507C3.21851 27.6684 3.03906 27.3466 3.03906 27V8C3.03906 7.46957 3.24978 6.96086 3.62485 6.58579ZM27.0391 8L5.03906 8L5.03906 25.382L7.59185 24.1056C7.87338 23.9648 8.20475 23.9648 8.48628 24.1056L12.0391 25.882L15.5918 24.1056C15.8734 23.9648 16.2047 23.9648 16.4863 24.1056L20.0391 25.882L23.5918 24.1056C23.8734 23.9648 24.2047 23.9648 24.4863 24.1056L27.0391 25.382V8Z"
                    fill="white"
                  />
                </svg>
              )}
              <span></span>
            </>
          ) : (
            <div className=" flex items-center  text-light-100 font-poppins">
              <AiOutlineClose
                className="lg:hidden w-[30px] h-[24px]"
                onClick={() => setIsOpen(false)}
              />
              Menu
            </div>
          )}
        </div>
        <Button
          checkout={!admin}
          color="tomato-dark"
          title={admin ? "Novo prato" : "Pedidos"}
          size="small"
          mobile={true}
          loading={false}
          className=" hidden lg:flex"
        />
        <IconLogout />
      </div>
      <div
        className={classNames(
          "bg-dark-100 fixed top-0 left-0 w-screen h-full",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className=" px-7 flex flex-col gap-7  justify-center">
          <p className=" flex  items-center w-full h-full   py-3 mt-36 rounded-md  bg-dark-900  ">
            <BsSearch className=" w-6 h-6  text-light-100 mx-3" />
            <input
              placeholder="Busque por pratos ou ingredientes"
              className="border-none w-full h-full   focus-within:outline-none  text-light-100 hover:border-none bg-transparent"
              type="text"
            />
          </p>
          <span className=" text-light-100 capitalize text-base1 font-poppins border-b py-5  border-b-light-400">
            Sair
          </span>
        </div>
      </div>{" "}
    </header>
  );
};
