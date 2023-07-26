import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./index";

const NavBar = () => {
  return (
    <Container>
      <nav>
        <Link to="/">home</Link>
        <Link to="/cart">cart</Link>
      </nav>
    </Container>
  );
};

export default NavBar;
