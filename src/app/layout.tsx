import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Head from "next/head";
import Footer from "./components/Footer";
import Landing from "./components/landing/Landing";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <Head>
        <></>
      </Head>
      <body className={inter.className}>
        <Header />
        <Landing />
        {children}
        <Footer />
      </body>
    </html>
  );
}
