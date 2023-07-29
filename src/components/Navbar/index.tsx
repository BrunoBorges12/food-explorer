/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Badge, Button, Layout } from "antd";
import { Container } from "../Container";
import { Logo } from "../Logo";

import { Search } from "./components/Search";
import { IconNote } from "./components/IconNote";
import { IconLogout } from "./components/IconLogout";
import { IconMenu } from "./components/IconMenu";
import { SideBar } from "./components/SideBar";
import { useState } from "react";
import { useCart } from "@/context/Cart";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const { Header } = Layout;

export const NavBar = () => {
  const { data } = useSession();

  const { cart } = useCart();
  const [isOpen, setIsopen] = useState(false);
  return (
    <Header className=" top-0 bg-dark-600  items-center  z-[999] h-auto p-0   w-full fixed">
      <Container className="items-center py-4  justify-between flex relative lg:justify-start lg:py-6">
        <IconMenu onClick={() => setIsopen(!isOpen)} />
        <Logo
          size="small"
          className=" absolute  left-[31%] lg:relative  lg:left-auto"
        />
        <Search hiddenIsMobile={true} />
        <Link
          href={
            // @ts-ignore
            data?.role === "admin" ? "add-plate" : "pedidos"
          }
        >
          <Button
            size="large"
            className=" hidden mr-8 text-light-100 bg-tomato-100 gap-3   items-center rounded-md   lg:flex"
            // @ts-ignore
            icon={data?.role === "admin" ? null : <IconNote />}
          >
            <span className="">
              {
                // @ts-ignore
                data?.role === "admin" ? (
                  <span>Novo Prato</span>
                ) : (
                  <span>pedidos</span>
                )
              }
            </span>
            {
              // @ts-ignore
              data?.role === "user" && <span>({cart.data.length})</span>
            }
          </Button>
        </Link>
        <IconLogout
          onClick={() => {
            signOut({ callbackUrl: "/login" });
          }}
        />
        <Badge className="lg:hidden" count={cart.data.length}>
          <Link className="p-0 w-auto relative" href={"/pedidos"}>
            <IconNote />
          </Link>
        </Badge>
      </Container>
      <SideBar isOpen={isOpen} />
    </Header>
  );
};
