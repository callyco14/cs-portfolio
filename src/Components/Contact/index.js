import React from "react";
import { Inner, Container, Group, Text, Title, Tagline, Content, Icon } from "./contact";

export default function Contact({
  children,
  direction = "column",
  ...restProps
}) {
  return <Inner direction={direction}>{children}</Inner>;
}

Contact.Container = function ContactContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Contact.Group = function ContactGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Contact.Text = function ContactText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Contact.Title = function ContactTitle({ children, href, ...restProps }) {
  return (
    <Title href={href} {...restProps}>
      {children}
    </Title>
  );
};

Contact.Tagline = function ContactTagline({ children, href, ...restProps }) {
  return (
    <Tagline href={href} {...restProps}>
      {children}
    </Tagline>
  );
};

Contact.Content = function ContactContent({ children, href, ...restProps }) {
  return (
    <Content href={href} {...restProps}>
      {children}
    </Content>
  );
};

Contact.Icon = function ContactIcon({ children, src, ...restProps }) {
  return (
    <Icon src={src} {...restProps}>
      {children}
    </Icon>
  );
};