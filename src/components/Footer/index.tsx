import { Layout } from "antd";
import { Container } from "../Container";
import { Logo } from "../Logo";
const { Footer: FooterAntd } = Layout;

export const Footer = () => {
  return (
    <FooterAntd className=" bg-dark-600 mt-12 h-[77px]">
      <Container>
        <div className=" flex justify-between items-center">
          <Logo size="small" className=" opacity-50" />
          <span className=" text-light-100 ">
            © 2023 - Todos os direitos reservados.
          </span>
        </div>
      </Container>
    </FooterAntd>
  );
};
