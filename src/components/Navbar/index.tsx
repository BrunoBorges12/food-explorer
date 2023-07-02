import { useState } from "react";
import Button from "../Button";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { IconLogout } from "./components/IconLogout";
import { Search } from "./components/Search";
import { FiUser } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { signOut } from "next-auth/react";

import classNames from "classnames";
type propsNavbar = {
  admin?: boolean;
};
export const NavBar = ({ admin }: propsNavbar) => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  return (
    <header className="w-full top-0 flex  shadow-2xl justify-center items-center h-full bg-dark-600 ">
      <Container>
        <div className=" flex  items-center  justify-between  py-6 lg:gap-11   ">
          <RxHamburgerMenu
            className=" text-light-100 w-8 h-8 lg:hidden"
            onClick={() => setIsOpenNav(!isOpenNav)}
          />
          <div>
            <Logo size="small" admin={false} />
          </div>
          {/*Botão */}
          <Button
            size="medium"
            title="Ver pedidos"
            loading={false}
            className="h-[56px] max-w-[216px] lg:hidden"
            color="tomato-200"
            checkout={true}
            numberCart={5}
          />
          <div
            className={classNames(
              "flex gap-10 transition-all duration-1000  h-1/2 bg-dark-600 shadow-md border rounded z-[9999999] top-[6.25rem] w-full left-0  justify-center items-center  flex-col  fixed lg:shadow-none lg:rounded-none lg:border-none  lg:left-0 lg:bg-transparent lg:h-auto lg:top-auto  lg:justify-between lg:gap-8 lg:flex-row lg:translate-x-0  lg:w-full lg:relative",
              isOpenNav ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <Search className="max-w-xs lg:max-w-full mt-12 lg:mt-0" />

            <Button
              size="medium"
              title="Ver pedidos"
              loading={false}
              className="h-[56px] max-w-[216px] hidden lg:flex"
              color="tomato-200"
              checkout={true}
              numberCart={5}
            />
            <FiUser className="w-8 h-8 cursor-pointer text-light-100  hover:opacity-50 transition-all  lg:block lg:w-16 lg:h-16" />

            <IconLogout
              onClick={() => {
                signOut();
              }}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};
