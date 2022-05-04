import React from "react"
import {Inner, Container, Links, Text} from "./bottomnav"
 
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