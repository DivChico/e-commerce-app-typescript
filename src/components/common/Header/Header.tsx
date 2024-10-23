import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import HeaderBasket from "../../e-commerce/HeaderBasket/HeaderBasket";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Logo
          </Typography>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/about">
            About
          </Button>
          <Button color="inherit" href="/services">
            Services
          </Button>
          <Button color="inherit" href="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      <HeaderBasket />
    </>
  );
};

export default Header;
