import React from "react"
import { NavBarContainer } from "../../Containers/NavBar"
import { GalleryContainer } from "../../Containers/Gallery"
import { BottomNavContainer } from "../../Containers/BottomNav"
 
export const Gallery = () => {
   return (
       <>
       <NavBarContainer/>
       <GalleryContainer/>
       <BottomNavContainer/>
       </>
   )
}
