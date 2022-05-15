import FeaturedWork from "../Components/FeaturedWork/index";
import DIYDM from "../Assets/Images/IMG_4146.JPG";
import FPCC from "../Assets/Images/FPCC.png";
import HandyStand from "../Assets/Images/HandyStand.jpg";

export function EngineeringContainer() {
  return (
    <FeaturedWork.Container>
      <FeaturedWork>
          <FeaturedWork.Title>Engineering Projects</FeaturedWork.Title>
          <FeaturedWork.Group>
                <a href="diy-dm-kits">
                    <FeaturedWork.Box title="DIY-DM Kits" image={DIYDM}/>
                </a>
                <a href="bird-friendly-picnic-structures">
                    <FeaturedWork.Box title="Bird-Friendly-Picnic Structures" image={FPCC}/>
                </a>
          </FeaturedWork.Group>
          <FeaturedWork.Group>
                <a href="bird-friendly-picnic-structures">
                    <FeaturedWork.Box title="Bird-Friendly-Picnic Structures" image={FPCC}/>
                </a>
                <a href="handy-stand">
                    <FeaturedWork.Box title="Handy Stand" image={HandyStand}/>
                </a>
          </FeaturedWork.Group>
      </FeaturedWork>
    </FeaturedWork.Container>
  );
}