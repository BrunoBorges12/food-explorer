import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins, Roboto } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --poppins-font: ${poppins.style.fontFamily};

            --roboto-font: ${roboto.style.fontFamily};
          }
        `}
      </style>
      <SessionProvider session={pageProps.session} >
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
