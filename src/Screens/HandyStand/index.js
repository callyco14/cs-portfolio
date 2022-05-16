import React from "react"
import { NavBarContainer } from "../../Containers/NavBar"
import { HeaderContainer } from "../../Containers/HandyStand/Header"
import { OverviewContainer } from "../../Containers/HandyStand/Overview"
import { DesignProblemContainer } from "../../Containers/HandyStand/DesignProblem"
import { ProjectLayout1Container } from "../../Containers/HandyStand/Layout1"
import { ProjectLayout2Container } from "../../Containers/HandyStand/Layout2"
import { ProjectLayout3Container } from "../../Containers/HandyStand/Layout3"
import { ProjectLayout4Container } from "../../Containers/HandyStand/Layout4"
import { ProjectLayout5Container } from "../../Containers/HandyStand/Layout5"
import { ProjectLayout6Container } from "../../Containers/HandyStand/Layout6"
import { ProjectLayout7Container } from "../../Containers/HandyStand/Layout7"
import { ProjectLayout8Container } from "../../Containers/HandyStand/Layout8"
import { BottomNavContainer } from "../../Containers/BottomNav"
 
export const HandyStand = () => {
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
       <ProjectLayout8Container/>
       <BottomNavContainer/>
       </>
   )
}
