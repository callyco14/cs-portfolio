import React from "react"
import { NavBarContainer } from "../../Containers/NavBar"
import { HeaderContainer } from "../../Containers/DiydmKits/Header"
import { OverviewContainer } from "../../Containers/DiydmKits/Overview"
import { ContextContainer } from "../../Containers/DiydmKits/Context"
import { ProjectLayout1Container } from "../../Containers/DiydmKits/Layout1"
import { ProjectLayout2Container } from "../../Containers/DiydmKits/Layout2"
import { ProjectLayout3Container } from "../../Containers/DiydmKits/Layout3"
import { BottomNavContainer } from "../../Containers/BottomNav"
 
export const DiydmKits = () => {
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
