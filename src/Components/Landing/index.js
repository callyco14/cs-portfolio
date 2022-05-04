import React from "react"
import {Inner, Container, Intro, Group, Greeting, Name, Position, Picture} from "./landing"

export default function Landing ({children, direction = "row", ...restProps}) {
    return (
        <Inner direction = {direction}>{children}</Inner>
    )
}

Landing.Container = function LandingContainer ({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Landing.Intro = function LandingIntro ({children, ...restProps}) {
    return <Intro {...restProps}>{children}</Intro>
}

Landing.Group = function LandingGroup ({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Landing.Greeting = function LandingGreeting ({children, href, ...restProps}) {
    return (
        <Greeting href = {href} {...restProps}>
            {children}
        </Greeting>
    )
}

Landing.Name = function LandingName ({children, ...restProps}) {
    return (
        <Name {...restProps}>
            {children}
        </Name>
    )
}

Landing.Position = function LandingPosition ({children, href, ...restProps}) {
    return (
        <Position href = {href} {...restProps}>
            {children}
        </Position>
    )
}

Landing.Picture = function LandingPicture ({children, src, ...restProps}) {
    return (
        <Picture src = {src} {...restProps}>
            {children}
        </Picture>
    )
}