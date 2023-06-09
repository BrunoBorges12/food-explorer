import { useState } from "react";
import { Container } from "../Container";
import { Logo } from "../Logo";
type propsNavbar = {
  admin?: boolean;
};
export const NavBar = ({ admin }: propsNavbar) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full h-full">
      <Container>
        <div className="flex">
          <Logo size="small" admin={true} />
        </div>
      </Container>
    </header>
  );
};
