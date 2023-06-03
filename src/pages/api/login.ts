/* eslint-disable @typescript-eslint/no-explicit-any */
import { withSessionRoute } from "../../lib/config/withSession";
import axios from "axios";
import { setCookie } from "nookies";
import jwtDecode from "jwt-decode";

export default withSessionRoute(createSessionRoute);

async function createSessionRoute(req: any, res: any) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    console.log("email", email, "passowrd", password);
    let token; // Declare a variável token

    try {
      const response = await axios.post("http://127.0.0.1:8000/login", {
        password,
        email,
      });
      console.log("response ", response);

      token = response.data.token; // Atribua o valor de token
      if (token) {
        const expirationDate = new Date(); // Obtém a data e hora atual
        expirationDate.setMinutes(expirationDate.getMinutes() + 1); // Adiciona 1 minuto ao horário atual

        // Ajusta o fuso horário para Brasília (UTC-3)
        expirationDate.setUTCHours(expirationDate.getUTCHours() - 3);

        // Armazena o token em um cookie seguro
        const date = new Date();
        const minutes = 1.5;
        date.setTime(date.getTime() + minutes * 60 * 1000);
        setCookie({ res }, "token", token, {
          secure: true, // Defina como "true" se estiver usando HTTPS
          expires: date,
          path: "/", // Define o escopo do cookie
        });

        const tokenCookie: any = jwtDecode(token); // Use a variável token já declarada

        const now = Date.now();
        if (tokenCookie.exp * 1000 > now) {
          req.session.user = token;
          await req.session.save();
          // O token ainda está válido
          res.status(200).json({ message: "Login bem-sucedido" });
        } else {
          // O token expirou
          res.status(405).json({ message: "Token expirado" });
        }
      } else {
        console.log("Credenciais inválidas");

        res.status(401).json({ message: "Credenciais inválidas" });
      }
    } catch (error) {
      console.log("Erro ao autenticar");

      res.status(401).json({ message: "Erro ao autenticar" });
    }
  }
}
