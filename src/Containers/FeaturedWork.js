import FeaturedWork from "../Components/FeaturedWork/index";
import Foodies1 from "../Assets/Images/Foodies1.png";
import Foodies2 from "../Assets/Images/Foodies2.png";
import Memory1 from "../Assets/Images/Memory1.png";
import Memory2 from "../Assets/Images/Memory2.png";
import Inquest from "../Assets/Images/Inquest.png";
import DIYDM from "../Assets/Images/IMG_4146.JPG";
import FPCC from "../Assets/Images/FPCC.png";
import HandyStand from "../Assets/Images/HandyStand.jpg";
import { useState } from "react";

export function FeaturedWorkContainer() {
  return (
    <FeaturedWork.Container>
      <FeaturedWork>
          <FeaturedWork.Title>Featured Work</FeaturedWork.Title>
          <FeaturedWork.Group> 
                <a href="foodies-app">
                    <FeaturedWork.Box title="Foodies App" image={Foodies1}/>
                </a>
                <a href="memories-app">
                    <FeaturedWork.Box title="Memories App" image={Memory1}/>
                </a>
          </FeaturedWork.Group>
          <FeaturedWork.Group>
                <a href="challenges-app">
                    <FeaturedWork.Box title="Challenges App" image={Inquest}/>
                </a>
                <a href="diy-dm-kits">
                    <FeaturedWork.Box title="DIY-DM Kits" image={DIYDM}/>
                </a>
          </FeaturedWork.Group>
          <FeaturedWork.Group>
                <a href="bird-friendly-picnic-structures">
                    <FeaturedWork.Box title="Bird-Friendly Picnic Shelters" image={FPCC}/>
                </a>
                <a href="handy-stand">
                    <FeaturedWork.Box title="Handy Stand" image={HandyStand}/>
                </a>
          </FeaturedWork.Group>
      </FeaturedWork>
    </FeaturedWork.Container>
  );
}
