import React from "react";
import {
  Inner,
  Container,
  Intro,
  Group,
  Text,
  Title,
  Name,
  Content,
  Picture,
} from "./aboutme";

export default function AboutMe({
  children,
  direction = "column",
  ...restProps
}) {
  return <Inner direction={direction}>{children}</Inner>;
}

AboutMe.Container = function AboutMeContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

AboutMe.Intro = function AboutMeIntro({ children, ...restProps }) {
  return <Intro {...restProps}>{children}</Intro>;
};

AboutMe.Group = function AboutMeGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

AboutMe.Text = function AboutMeText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

AboutMe.Title = function AboutMeTitle({ children, href, ...restProps }) {
  return (
    <Title href={href} {...restProps}>
      {children}
    </Title>
  );
};

AboutMe.Name = function AboutMeName({ children, href, ...restProps }) {
  return (
    <Name href={href} {...restProps}>
      {children}
    </Name>
  );
};

AboutMe.Content = function AboutMeContent({ children, href, ...restProps }) {
  return (
    <Content href={href} {...restProps}>
      {children}
    </Content>
  );
};

AboutMe.Picture = function AboutMePicture({ children, src, ...restProps }) {
  return (
    <Picture src={src} {...restProps}>
      {children}
    </Picture>
  );
};
