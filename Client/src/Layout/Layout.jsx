import React from "react";
import { Nav, Footer } from "../Components/index";

export const Layout = ({ children }) => {
  return (
    <>
      <Nav />

      <main>{children}</main>

      <Footer />
    </>
  );
};
