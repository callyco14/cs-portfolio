import React from "react"
import {Inner, Container, Title, Group, Start, Philo} from "./designphilo"

export default function DesignPhilo ({children, direction = "column", ...restProps}) {
    return (
        <Inner direction = {direction}>{children}</Inner>
    )
}

DesignPhilo.Container = function DesignPhiloContainer ({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

DesignPhilo.Title = function DesignPhiloTitle ({children, href, ...restProps}) {
    return (
        <Title href = {href} {...restProps}>
            {children}
        </Title>
    )
}

DesignPhilo.Group = function DesignPhiloGroup ({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

DesignPhilo.Start = function DesignPhiloGroup ({children, href, ...restProps}) {
    return (
        <Start href = {href} {...restProps}>
            {children}
        </Start>
    )
}

DesignPhilo.Philo = function DesignPhiloGroup ({children, href, ...restProps}) {
    return (
        <Philo href = {href} {...restProps}>
            {children}
        </Philo>
    )
}