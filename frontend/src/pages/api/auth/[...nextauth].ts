/* eslint-disable @typescript-eslint/ban-ts-comment */
        // @ts-ignore

import type { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
  import jwt from "jsonwebtoken"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      //@ts-ignore
      async authorize(credentials) {
        try {
          const res = await fetch(`${process.env.BASE_URL_LOCAL}/login`  , {
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
            // @ts-ignore

    async encode({ secret, token }) {
      return jwt.sign(token, secret)
    },
            // @ts-ignore

    async decode({ secret, token }) {
      return jwt.verify(token, secret)
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 10 * 60, // 10 minutes
  },
  callbacks: {
            // @ts-ignore

    async jwt({ token, user }) {
      
      if (user) {
        // @ts-ignore

        token.accessToken = user.data.token;
      }
      return { ...token, ...user };
    },
            // @ts-ignore

    async session({ session, token }) {
      session.user = token;
      // @ts-ignore

      session.acessToken = token.data.token;
      return {
        ...token, 
        ...session,
        // @ts-ignore
        role: token.data.role,
      };
    },
  },
  
};

export default NextAuth(authOptions)
