import React from "react"
import { NavBarContainer } from "../../Containers/NavBar"
import { HeaderContainer } from "../../Containers/FPCC/Header"
import { OverviewContainer } from "../../Containers/FPCC/Overview"
import { ContextContainer } from "../../Containers/FPCC/Context"
import { ProjectLayout1Container } from "../../Containers/FPCC/Layout1"
import { ProjectLayout2Container } from "../../Containers/FPCC/Layout2"
import { ProjectLayout3Container } from "../../Containers/FPCC/Layout3"
import { BottomNavContainer } from "../../Containers/BottomNav"
 
export const FPCC = () => {
   return (
       <>
       <NavBarContainer/>
       <HeaderContainer/>
       <OverviewContainer/>
       <ContextContainer/>
       <ProjectLayout1Container/>
       <ProjectLayout2Container/>
       <ProjectLayout3Container/>
       <BottomNavContainer/>
       </>
   )
}
