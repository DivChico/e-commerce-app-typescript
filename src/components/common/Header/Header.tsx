import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import HeaderBasket from "../../e-commerce/HeaderBasket/HeaderBasket";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Logo
          </Typography>
          <Button color="inherit" as={Link} to="/">
            Home
          </Button>
          <Button color="inherit" as={Link} to="/categories">
            categories
          </Button>
          <Button color="inherit" as={Link} to="/categories/products/men">
            Products
          </Button>
        </Toolbar>
      </AppBar>
      <HeaderBasket />
    </>
  );
};

export default Header;
