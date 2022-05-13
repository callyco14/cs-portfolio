import React from "react"
import { NavBarContainer } from "../../Containers/NavBar"
import { HeaderContainer } from "../../Containers/FPCC/Header"
import { OverviewContainer } from "../../Containers/FPCC/Overview"
import { DesignProblemContainer } from "../../Containers/FPCC/DesignProblem"
import { ProjectLayout1Container } from "../../Containers/FPCC/Layout1"
import { ProjectLayout2Container } from "../../Containers/FPCC/Layout2"
import { ProjectLayout3Container } from "../../Containers/FPCC/Layout3"
import { ProjectLayout4Container } from "../../Containers/FPCC/Layout4"
import { ProjectLayout5Container } from "../../Containers/FPCC/Layout5"
import { ProjectLayout6Container } from "../../Containers/FPCC/Layout6"
import { ProjectLayout7Container } from "../../Containers/FPCC/Layout7"
import { BottomNavContainer } from "../../Containers/BottomNav"
 
export const FPCC = () => {
   return (
       <>
       <NavBarContainer/>
       <HeaderContainer/>
       <OverviewContainer/>
       <DesignProblemContainer/>
       <ProjectLayout1Container/>
       <ProjectLayout2Container/>
       <ProjectLayout3Container/>
       <ProjectLayout4Container/>
       <ProjectLayout5Container/>
       <ProjectLayout6Container/>
       <ProjectLayout7Container/>
       <BottomNavContainer/>
       </>
   )
}
