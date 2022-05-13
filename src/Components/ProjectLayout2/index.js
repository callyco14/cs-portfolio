import React from "react";
import { Inner, Container, Text, Group, PicGroup, Title, Content, Picture } from "./projectlayout2";

export default function ProjectLayout2({
  children,
  direction = "row",
  ...restProps
}) {
  return <Inner direction={direction}>{children}</Inner>;
}

ProjectLayout2.Container = function ProjectLayout2Container({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

ProjectLayout2.Text = function ProjectLayout2Text({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

ProjectLayout2.Group = function ProjectLayout2Group({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
  };

ProjectLayout2.PicGroup = function ProjectLayout2PicGroup({ children, ...restProps }) {
    return <PicGroup {...restProps}>{children}</PicGroup>;
  };

ProjectLayout2.Title = function ProjectLayout2Title({ children, href, ...restProps }) {
  return (
    <Title href={href} {...restProps}>
      {children}
    </Title>
  );
};

ProjectLayout2.Content = function ProjectLayout2Content({ children, href, ...restProps }) {
  return (
    <Content href={href} {...restProps}>
      {children}
    </Content>
  );
};

ProjectLayout2.Picture = function ProjectLayout2Picture({ children, src, width, ...restProps }) {
  return (
    <Picture src={src} width={width} {...restProps}>
      {children}
    </Picture>
  );
};