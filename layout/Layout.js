import React from "react";
import Head from "next/head";
import Footer from "./../components/Footer/Footer";
import Header from "./../components/Header/Header";
import { Container } from "./LayoutStyles";

const Layout = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
