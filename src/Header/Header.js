import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import "./Header.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {

  return (
    <AppBar position="sticky" className="container">
      <Container maxWidth="xl" className="container">
        <Toolbar disableGutters sx={{ margin: "auto" }}>
          <Typography
            variant="h5"
            noWrap
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            to={`/`}
            component={Link}
          >
            Kandarp Mishra
          </Typography>
          <Typography
            variant="h6"
            noWrap
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            to={`/`}
            component={Link}
          >
            Kandarp Mishra
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
