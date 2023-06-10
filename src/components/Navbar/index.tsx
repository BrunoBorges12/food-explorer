import Button from "../Button";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { Search } from "./components/Search";
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
          <div className=" flex justify-between  w-full gap-14">
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
          </div>
        </div>
      </Container>
    </header>
  );
};
