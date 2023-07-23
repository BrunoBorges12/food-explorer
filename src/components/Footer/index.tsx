import { Layout } from "antd";
import { Container } from "../Container";
import { Logo } from "../Logo";
const { Footer: FooterAntd } = Layout;

export const Footer = () => {
  return (
    <FooterAntd className=" w-full bottom-0 bg-dark-600 mt-12 h-[77px]">
      <Container>
        <div className=" flex justify-between items-center flex-col lg:flex-row">
          <Logo size="small" className=" opacity-50" />
          <span className=" text-light-100  hidden lg:block ">
            © 2023 - Todos os direitos reservados.
          </span>
        </div>
      </Container>
    </FooterAntd>
  );
};
