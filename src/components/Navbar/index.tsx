import { Button, Layout } from "antd";
import { Container } from "../Container";
import { Logo } from "../Logo";

import { Search } from "./components/Search";
import { IconNote } from "./components/IconNote";
import { IconLogout } from "./components/IconLogout";
import { IconMenu } from "./components/IconMenu";
import { SideBar } from "./components/SideBar";
import { useState } from "react";

const { Header } = Layout;
export const NavBar = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <Header className=" bg-dark-600  items-center relative h-auto p-0  ">
      <Container className="items-center py-4  justify-between flex relative lg:justify-start lg:py-6">
        <IconMenu onClick={() => setIsopen(!isOpen)} />
        <Logo
          size="small"
          className=" absolute  left-[31%] lg:relative  lg:left-auto"
        />
        <Search hiddenIsMobile={true} />
        <a href="/teste">
          <Button
            size="large"
            className=" hidden mr-8 text-light-100 bg-tomato-100 gap-3   items-center rounded-md   lg:flex"
            icon={<IconNote />}
          >
            <span className="">Pedidos</span>
            <span>(1)</span>
          </Button>
        </a>
        <IconLogout
          onClick={() => {
            console.log("coloca algo aqui");
          }}
        />
      </Container>
      <SideBar isOpen={isOpen} />
    </Header>
  );
};
