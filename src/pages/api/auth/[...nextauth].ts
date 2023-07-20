/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      //@ts-ignore

      async authorize(credentials) {
        try {
          const res = axios
            .post(
              "http://127.0.0.1:5000/api/login",
              credentials
            )
            .then((response) => response)
            .catch((error) => error);
          //@ts-ignore
          const user = await res;
          //@ts-ignore

          if (user.data.data.token && user) {
            // debug
            return {
              user,
            };
          }
        } catch (err) {
          throw new Error("Next Auth - Authorize: Authentication error");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // @ts-ignore
      if (user?.token) {
        // @ts-ignore
        token = { access_token: user.access_token };
      }
      return token;
    },
    async session({ session, token, user }) {
      // @ts-ignore

      session.access_token = token.access_token;
      return session;
    },
  },
});
