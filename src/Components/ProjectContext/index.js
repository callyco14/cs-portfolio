import React from "react";
import { Inner, Container, Text, Title, Content, Picture } from "./projectcontext";

export default function ProjectContext({
  children,
  direction = "row",
  ...restProps
}) {
  return <Inner direction={direction}>{children}</Inner>;
}

ProjectContext.Container = function ProjectContextContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

ProjectContext.Text = function ProjectContextText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

ProjectContext.Title = function ProjectContextTitle({ children, href, ...restProps }) {
  return (
    <Title href={href} {...restProps}>
      {children}
    </Title>
  );
};

ProjectContext.Content = function ProjectContextContent({ children, href, ...restProps }) {
  return (
    <Content href={href} {...restProps}>
      {children}
    </Content>
  );
};

ProjectContext.Picture = function ProjectContextPicture({ children, src, ...restProps }) {
  return (
    <Picture src={src} {...restProps}>
      {children}
    </Picture>
  );
};
