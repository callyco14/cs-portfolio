import React from "react"
import { NavBarContainer } from "../../Containers/NavBar"
import { LandingContainer } from "../../Containers/Landing"
import { DesignPhiloContainer } from "../../Containers/DesignPhilo"
import { FeaturedWorkContainer } from "../../Containers/FeaturedWork"
import { BottomNavContainer } from "../../Containers/BottomNav"
 
export const Home = () => {
   return (
       <>
       <NavBarContainer/>
       <LandingContainer/>
       <DesignPhiloContainer/>
       <FeaturedWorkContainer/>
       <BottomNavContainer/>
       </>
   )
}
