import React from "react";
import { Inner, Container, Group, Content, Tag } from "./projectoverview";

export default function ProjectOverview({
  children,
  direction = "column",
  ...restProps
}) {
  return <Inner direction={direction}>{children}</Inner>;
}

ProjectOverview.Container = function ProjectOverviewContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

ProjectOverview.Group = function ProjectOverviewGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

ProjectOverview.Content = function ProjectOverviewContent({ children, ...restProps }) {
  return (
    <Content {...restProps}>
      {children}
    </Content>
  );
};

ProjectOverview.Tag = function ProjectOverviewTag({ children, ...restProps }) {
    return (
      <Tag {...restProps}>
        {children}
      </Tag>
    );
  };
