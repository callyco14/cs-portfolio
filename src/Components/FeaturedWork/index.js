import React, { useState } from "react"
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
 
 FeaturedWork.Box = function FeaturedWorkBox ({title, image, href, ...restProps}) {
     const [hover, setHover] = useState(false)
     return <Box onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)}
     href = {href}
     style={{backgroundImage: `url(${image})`,
            backgroundSize:"contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundOrigin: "content-box"}}
     {...restProps}>
         {hover ? <h1 id="Title">{title}</h1> : null}
         </Box>
  }