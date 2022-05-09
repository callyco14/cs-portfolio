import React from "react"
import {Inner, Container, Group, Title, Box, Icon} from "./featuredwork"
 
export default function FeaturedWork ({children, direction = "row", ...restProps}) {
   return (
       <Inner direction = {direction}>{children}</Inner>
   )
}
 
FeaturedWork.Container = function FeaturedWorkContainer ({children, ...restProps}) {
   return <Container {...restProps}>{children}</Container>
}

FeaturedWork.Group = function FeaturedWorkGroup ({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

FeaturedWork.Title = function FeaturedWorkTitle ({children, href, ...restProps}) {
    return (
        <Title href = {href} {...restProps}>
            {children}
        </Title>
    )
 }
 
 FeaturedWork.Box = function FeaturedWorkBox ({children, ...restProps}) {
     return <Box {...restProps}>{children}</Box>
  }

FeaturedWork.Icon = function FeaturedWorkIcon ({children, src, ...restProps}) {
    return (
        <Icon src = {src} {...restProps}>
            {children}
        </Icon>
    )
}