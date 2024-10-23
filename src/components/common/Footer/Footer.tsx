// Footer.js
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="static"
      sx={{ top: "auto", bottom: 0, background: "#333" }}
    >
      <Toolbar>
        <Typography variant="body2" color="inherit" sx={{ flexGrow: 1 }}>
          &copy; 2024 abdullah hamdy alatawwna. All rights reserved.
        </Typography>
        <Typography variant="body2" color="inherit" sx={{ mr: 2 }}>
          <a
            href="/privacy"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Privacy Policy
          </a>
        </Typography>
        <Typography variant="body2" color="inherit">
          <a href="/terms" style={{ color: "inherit", textDecoration: "none" }}>
            Terms of Service
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
