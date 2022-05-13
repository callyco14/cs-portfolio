import React from "react";
import { Inner, Container, Text, Group, PicGroup, Title, Content, Picture } from "./projectlayout1";

export default function ProjectLayout1({
  children,
  direction = "row",
  ...restProps
}) {
  return <Inner direction={direction}>{children}</Inner>;
}

ProjectLayout1.Container = function ProjectLayout1Container({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

ProjectLayout1.Text = function ProjectLayout1Text({ children, padding, ...restProps }) {
  return <Text padding={padding} {...restProps}>{children}</Text>;
};

ProjectLayout1.Group = function ProjectLayout1Group({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
  };

ProjectLayout1.PicGroup = function ProjectLayout1PicGroup({ children, ...restProps }) {
    return <PicGroup {...restProps}>{children}</PicGroup>;
  };

ProjectLayout1.Title = function ProjectLayout1Title({ children, href, ...restProps }) {
  return (
    <Title href={href} {...restProps}>
      {children}
    </Title>
  );
};

ProjectLayout1.Content = function ProjectLayout1Content({ children, href, ...restProps }) {
  return (
    <Content href={href} {...restProps}>
      {children}
    </Content>
  );
};

ProjectLayout1.Picture = function ProjectLayout1Picture({ children, src, width, ...restProps }) {
  return (
    <Picture src={src} width={width} {...restProps}>
      {children}
    </Picture>
  );
};
