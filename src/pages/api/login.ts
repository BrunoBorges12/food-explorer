/* eslint-disable @typescript-eslint/no-explicit-any */
import { withSessionRoute } from "../../lib/config/withSession";
import { setCookie } from "nookies";
import jwtDecode from "jwt-decode";

export default withSessionRoute(createSessionRoute);

async function createSessionRoute(req: any, res: any) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    console.log("email", email, "password", password);

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          email,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        // Armazena o token em um cookie seguro
        const date = new Date();
        const minutes = 1.5;
        date.setTime(date.getTime() + minutes * 60 * 1000);
        setCookie({ res }, "token", token, {
          secure: true, // Defina como "true" se estiver usando HTTPS
          expires: date,
          path: "/", // Define o escopo do cookie
        });

        const tokenCookie: any = jwtDecode(token);

        const now = Date.now();
        if (tokenCookie.exp * 1000 > now) {
          req.session.user = token;
          await req.session.save();
          res.status(200).json({ message: "Login bem-sucedido" });
        } else {
          res.status(405).json({ message: "Token expirado" });
        }
      } else {
        console.log("Credenciais inválidas");
        res.status(401).json({ message: "Credenciais inválidas" });
      }
    } catch (error) {
      console.log(error);
      res.status(505).json({ message: error });
    }
  }
}
