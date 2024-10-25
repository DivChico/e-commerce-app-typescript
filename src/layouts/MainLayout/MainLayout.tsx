import React from "react";
//router
import { Outlet } from "react-router-dom";
//compnents
import { Footer, Header } from "@components/common";
//MUI
import { Box, Container } from "@mui/material";

const MainLayout = () => {
  return (
    <Container>
      <Header />
      <Box sx={{ margin: "50px 0px" }}>
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
};

export default MainLayout;
