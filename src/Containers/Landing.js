import Landing from "../Components/Landing/index";
import Headshot from "../Assets/Images/IMG_6862.png";
 
export function LandingContainer () {
   return (
       <Landing.Container>
           <Landing>
               <Landing.Intro>
                    <Landing.Group>
                            <Landing.Greeting>Hello there, I'm</Landing.Greeting>
                            <Landing.Name>Callista Sukohardjo</Landing.Name>
                            <Landing.Position>Manufacturing and Design Engineer</Landing.Position>
                    </Landing.Group>
                    <Landing.Picture src = {Headshot}/>
               </Landing.Intro>
           </Landing>
       </Landing.Container>
   )
}
