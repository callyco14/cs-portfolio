import React from "react";
import { Inner, Container, Transformation, Group, Title, Content, Picture, Blurb, PicGroup } from "./projectheader";

export default function ProjectHeader({
  children,
  direction = "column",
  ...restProps
}) {
  return <Inner direction={direction}>{children}</Inner>;
}

ProjectHeader.Container = function ProjectHeaderContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

ProjectHeader.Transformation = function ProjectHeaderTransformation({ children, ...restProps }) {
  return <Transformation {...restProps}>{children}</Transformation>;
};

ProjectHeader.Group = function ProjectHeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

ProjectHeader.Title = function ProjectHeaderTitle({ children, href, ...restProps }) {
  return (
    <Title href={href} {...restProps}>
      {children}
    </Title>
  );
};

ProjectHeader.Content = function ProjectHeaderContent({ children, href, ...restProps }) {
  return (
    <Content href={href} {...restProps}>
      {children}
    </Content>
  );
};

ProjectHeader.Picture = function ProjectHeaderPicture({ children, src, ...restProps }) {
  return (
    <Picture src={src} {...restProps}>
      {children}
    </Picture>
  );
};

ProjectHeader.Blurb = function ProjectHeaderBlurb({ children, href, ...restProps }) {
  return (
    <Blurb href={href} {...restProps}>
      {children}
    </Blurb>
  );
};

ProjectHeader.PicGroup = function ProjectHeader1PicGroup({ children, ...restProps }) {
  return <PicGroup {...restProps}>{children}</PicGroup>;
};