import BottomNav from "../Components/BottomNav/index";
import Git from "../Assets/Icons/github.png";
import Insta from "../Assets/Icons/instagram.png";
import LinkedIn from "../Assets/Icons/LinkedIn.png";
import Mail from "../Assets/Icons/mail.png";
import Call from "../Assets/Icons/phone_outline.png";
 
export function BottomNavContainer () {
   return (
       <BottomNav.Container>
           <BottomNav>
                <BottomNav.Links>
                        <BottomNav.Text href="/">Home</BottomNav.Text>
                        <BottomNav.Text href="engineering">Engineering</BottomNav.Text>
                        <BottomNav.Text href="design">Design</BottomNav.Text>
                        <BottomNav.Text href="gallery">Gallery</BottomNav.Text>
                        <BottomNav.Text href="aboutme">About Me</BottomNav.Text>
                        <BottomNav.Text href="contact">Contact</BottomNav.Text>
                </BottomNav.Links>
                <BottomNav.Group>
                <a href="tel:7735640609">
                    <BottomNav.Icon src={Call}></BottomNav.Icon>
                </a>
                <a href="mailto:callistasukohardjo2023@u.northwestern.edu">
                    <BottomNav.Icon src={Mail}></BottomNav.Icon>
                </a>
                <a href="https://www.linkedin.com/in/callista-sukohardjo/">
                    <BottomNav.Icon src={LinkedIn}></BottomNav.Icon>
                </a>
                <a href="https://www.instagram.com/callycocreates/">
                    <BottomNav.Icon src={Insta}></BottomNav.Icon>
                </a>
                <a href="#">
                    <BottomNav.Icon src={Git}></BottomNav.Icon>
                </a>
            </BottomNav.Group>
           </BottomNav>
       </BottomNav.Container>
   )
}