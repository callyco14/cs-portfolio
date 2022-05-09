import React from "react";
import { Inner, Container, Links, Text, Logo } from "./navbar";

export default function NavBar({ children, direction = "row", ...restProps }) {
  return <Inner direction={direction}>{children}</Inner>;
}

NavBar.Container = function NavBarContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

NavBar.Links = function NavBarLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

NavBar.Text = function NavBarText({ children, href, ...restProps }) {
  return (
    <Text href={href} {...restProps}>
      {children}
    </Text>
  );
};

NavBar.Logo = function NavBarLogo({ children, href, ...restProps }) {
  return (
    <Logo href={href} {...restProps}>
      {children}
    </Logo>
  );
};
