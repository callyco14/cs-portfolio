import React from "react"
import { NavBarContainer } from "../../Containers/NavBar"
import { EngineeringContainer } from "../../Containers/Engineering"
import { BottomNavContainer } from "../../Containers/BottomNav"
 
export const Engineering = () => {
   return (
       <>
       <NavBarContainer/>
       <EngineeringContainer/>
       <BottomNavContainer/>
       </>
   )
}
