import BottomNav from "../Components/BottomNav/index";
 
export function BottomNavContainer () {
   return (
       <BottomNav.Container>
           <BottomNav>
                <BottomNav.Links>
                        <BottomNav.Text href="engineering">Engineering</BottomNav.Text>
                        <BottomNav.Text href="design">Design</BottomNav.Text>
                        <BottomNav.Text href="aboutme">About Me</BottomNav.Text>
                        <BottomNav.Text href="contact">Contact</BottomNav.Text>
                </BottomNav.Links>
           </BottomNav>
       </BottomNav.Container>
   )
}