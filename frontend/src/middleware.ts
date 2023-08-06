/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/rules-of-hooks */
export { default } from "next-auth/middleware";
// This is an example of how to read a JSON Web Token from an API route
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export type UserType = {
  accessToken: string;
  refreshToken: string;
  username: string;
};

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = "/login";
  if (!req.cookies.get("next-auth.session-token")) {
    return NextResponse.redirect(url);
  } else {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    const { accessToken } = jwt.decode(
      req.cookies.get("next-auth.session-token")?.value!
    ) as UserType;
    const token = jwt.decode(accessToken);
    // @ts-ignore

    if (token && Date.now() / 1000 < token?.exp) {
      console.log("caiu aqui2");

      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}

export const config = {
  matcher: ["/", '/pedidos','/product/:path*'],
};
