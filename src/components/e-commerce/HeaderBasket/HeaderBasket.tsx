// HeaderBasket.js
import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const HeaderBasket = ({ itemCount = 1 }) => {
  return (
    <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
      <IconButton color="inherit" aria-label="shopping basket">
        <Badge badgeContent={itemCount} color="error">
          <ShoppingBasketIcon />
        </Badge>
      </IconButton>
    </Toolbar>
  );
};

export default HeaderBasket;
