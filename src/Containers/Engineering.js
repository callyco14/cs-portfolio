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
                    <FeaturedWork.Box>
                        <FeaturedWork.Icon src={DIYDM} />
                    </FeaturedWork.Box>
                </a>
                <a href="bird-friendly-picnic-structures">
                    <FeaturedWork.Box>
                        <FeaturedWork.Icon src={FPCC} />
                    </FeaturedWork.Box>
                </a>
          </FeaturedWork.Group>
          <FeaturedWork.Group>
                <a href="bird-friendly-picnic-structures">
                    <FeaturedWork.Box>
                        <FeaturedWork.Icon src={FPCC} />
                    </FeaturedWork.Box>
                </a>
                <a href="diydmkits">
                    <FeaturedWork.Box>
                        <FeaturedWork.Icon src={HandyStand} />
                    </FeaturedWork.Box>
                </a>
          </FeaturedWork.Group>
      </FeaturedWork>
    </FeaturedWork.Container>
  );
}