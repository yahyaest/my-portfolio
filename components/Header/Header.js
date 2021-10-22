import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  Container,
  Logo,
  Sections,
  Icons,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";
import { DiFsharp } from "react-icons/di";

const Header = () => {
  return (
    <Container>
      <Logo>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: "white" }}>
            <DiFsharp size="3rem" />
            <span>Portfolio</span>
          </a>
        </Link>
      </Logo>

      <Sections>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Sections>

      <Icons>
        <SocialIcons href="https://google.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillGoogleCircle size="3rem" />
        </SocialIcons>
      </Icons>
    </Container>
  );
};

export default Header;
