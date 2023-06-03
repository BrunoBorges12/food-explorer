import { withSessionSsr } from "../lib/config/withSession";
import axios from "axios";
import { parseCookies } from "nookies";
import jwtDecode from "jwt-decode";

const PrivatePage = ({ user }) => {
  // Renderize a página privada
  // ...

  return (
    <div className="  w-screen h-screen    bg-light-100   flex items-center justify-around">
      <h1>ola usuario</h1>
    </div>
  );
};

export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  // Verifica se o token está presente nos cookies
  const cookies = parseCookies({ req });
  const token = cookies.token ? cookies.token : undefined;
  const user = req.session?.user;

  console.log("token", token);

  if (!user || !token) {
    req.session.destroy();
    // Redireciona para a página de login se o token não estiver presente
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
});

export default PrivatePage;
