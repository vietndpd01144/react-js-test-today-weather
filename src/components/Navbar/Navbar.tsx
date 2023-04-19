import React from "react";
import { NavbarProps } from "./Navbar.types";
import { Container, Logo, Wrapper } from "./Navbar.styled";

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Container>
      <Wrapper>
        <Logo>Today's Weather</Logo>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
