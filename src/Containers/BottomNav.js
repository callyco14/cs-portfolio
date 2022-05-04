import BottomNav from "../Components/BottomNav/index";
 
export function BottomNavContainer () {
   return (
       <BottomNav.Container>
           <BottomNav>
                <BottomNav.Links>
                        <BottomNav.Text href="#">Engineering</BottomNav.Text>
                        <BottomNav.Text href="#">Design</BottomNav.Text>
                        <BottomNav.Text href="#">About Me</BottomNav.Text>
                        <BottomNav.Text href="#">Contact</BottomNav.Text>
                </BottomNav.Links>
           </BottomNav>
       </BottomNav.Container>
   )
}