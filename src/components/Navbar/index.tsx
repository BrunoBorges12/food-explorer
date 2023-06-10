import Button from "../Button";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { IconLogout } from "./components/IconLogout";
import { Search } from "./components/Search";
import { FiUser } from "react-icons/fi";
type propsNavbar = {
  admin?: boolean;
};
export const NavBar = ({ admin }: propsNavbar) => {
  return (
    <header className="w-full top-0 flex  justify-center items-center h-full bg-dark-600 ">
      <Container>
        <div className=" flex  items-center  py-6 gap-11   ">
          <div>
            <Logo size="small" admin={false} />
          </div>
          <div className=" flex justify-between  items-center w-full gap-8">
            <Search />
            <Button
              size="medium"
              title="Ver pedidos"
              loading={false}
              className="h-[56px] max-w-[216px]"
              color="tomato-200"
              checkout={true}
              numberCart={5}
            />
            <FiUser className="lg:w-16 lg:h-12 cursor-pointer text-light-100  hover:opacity-50 transition-all" />
            <IconLogout />
          </div>
        </div>
      </Container>
    </header>
  );
};
