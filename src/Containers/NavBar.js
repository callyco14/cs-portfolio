import NavBar from "../Components/NavBar/index";
 
export function NavBarContainer () {
   return (
       <NavBar.Container>
            <NavBar>
                    <NavBar.Logo href="/">Callista Sukohardjo</NavBar.Logo>
                    <NavBar.Links>
                        <NavBar.Text to="#">Engineering</NavBar.Text>
                        <NavBar.Text href="#">Design</NavBar.Text>
                        <NavBar.Text href="aboutme">About Me</NavBar.Text>
                        <NavBar.Text href="#">Contact</NavBar.Text>
                    </NavBar.Links>
            </NavBar>
       </NavBar.Container>
       
   )
}
 

// add id next to NavBar.Container to create an anchor tag, have href="#Portfolio",
// like anchoring the tag to a container on the page
// background image can't be saved, image can
 
// ADD THE LINKS IN LATER
