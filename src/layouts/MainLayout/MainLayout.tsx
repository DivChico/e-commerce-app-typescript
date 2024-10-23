import React from "react";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import { Container } from "@mui/material";

const MainLayout = () => {
  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  );
};

export default MainLayout;
