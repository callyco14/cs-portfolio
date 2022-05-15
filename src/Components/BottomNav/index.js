import React from "react"
import {Inner, Container, Links, Text, Group, Icon} from "./bottomnav"
 
export default function BottomNav ({children, direction = "row", ...restProps}) {
   return (
       <Inner direction = {direction}>{children}</Inner>
   )
}
 
BottomNav.Container = function BottomNavContainer ({children, ...restProps}) {
   return <Container {...restProps}>{children}</Container>
}

BottomNav.Links = function BottomNavLinks ({children, ...restProps}) {
   return <Links {...restProps}>{children}</Links>
}
 
BottomNav.Text = function BottomNavText ({children, href, ...restProps}) {
   return (
       <Text href = {href} {...restProps}>
           {children}
       </Text>
   )
}

BottomNav.Group = function BottomNavGroup({ children, ...restProps }) {
   return <Group {...restProps}>{children}</Group>;
 };

BottomNav.Icon = function BottomNavIcon({ children, src, ...restProps }) {
   return (
     <Icon src={src} {...restProps}>
       {children}
     </Icon>
   );
 };