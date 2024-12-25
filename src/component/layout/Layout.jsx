import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
export default function Layout({ children }) {
  return (
    <div>
      <Container maxWidth="lg">
        <Header />
        {children}
        <Footer />
      </Container>
    </div>
  );
}
