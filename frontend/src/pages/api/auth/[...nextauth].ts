/* eslint-disable @typescript-eslint/ban-ts-comment */
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
// @ts-ignore

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      //@ts-ignore
      async authorize(credentials) {
        try {
          const res = await fetch("http://127.0.0.1:5000/api/login", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });

          const user = await res.json();
          if (res.ok && user) {
            return user;
          }
          // Return null if user data could not be retrieved
          return null;
        } catch (err) {
          // @ts-ignore

          throw new Error(err, "Next Auth - Authorize: Authentication error");
        }
      },
      // @ts-ignore
      credentials: undefined,
    }),
  ],
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 10 * 60, // 10 minutes
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // @ts-ignore

        token.accessToken = user.data.token;
      }
      return { ...token, ...user };
    },
    async session({ session, token }) {
      console.log(token);
      session.user = token;
      // @ts-ignore

      session.acessToken = token.data.token;
      return {
        ...session,
        // @ts-ignore
        role: token.data.role,
      };
    },
  },
});
