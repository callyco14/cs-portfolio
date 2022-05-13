import React from "react"
import { NavBarContainer } from "../../Containers/NavBar"
import { Layout1Container } from "../../Containers/Rendering/Layout1"
import { BottomNavContainer } from "../../Containers/BottomNav"

 
export const Rendering = () => {
    return (
        <>
        <NavBarContainer/>
        <Layout1Container/>
        <BottomNavContainer/>
        </>
    )
 }