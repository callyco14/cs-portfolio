import FeaturedWork from "../Components/FeaturedWork/index";
import Foodies1 from "../Assets/Images/Foodies1.png";
import Foodies2 from "../Assets/Images/Foodies2.png";
import Memory1 from "../Assets/Images/Memory1.png";
import Memory2 from "../Assets/Images/Memory2.png";
import Inquest from "../Assets/Images/Inquest.png";
import DIYDM from "../Assets/Images/IMG_4146.JPG";
import FPCC from "../Assets/Images/FPCC.png";
import HandyStand from "../Assets/Images/HandyStand.jpg";

export function FeaturedWorkContainer() {
  return (
    <FeaturedWork.Container>
      <FeaturedWork>
          <FeaturedWork.Title>Featured Work</FeaturedWork.Title>
          <FeaturedWork.Group>
                <a href="diydmkits">
                    <FeaturedWork.Box>
                        <FeaturedWork.Icon src={Foodies1} />
                        <FeaturedWork.Icon src={Foodies2} />
                    </FeaturedWork.Box>
                </a>
                <a href="diydmkits">
                    <FeaturedWork.Box>
                        <FeaturedWork.Icon src={Memory1} />
                        <FeaturedWork.Icon src={Memory2} />
                    </FeaturedWork.Box>
                </a>
          </FeaturedWork.Group>
          <FeaturedWork.Group>
                <a href="diydmkits">
                    <FeaturedWork.Box>
                        <FeaturedWork.Icon src={Inquest} />
                    </FeaturedWork.Box>
                </a>
                <a href="diydmkits">
                    <FeaturedWork.Box>
                        <FeaturedWork.Icon src={DIYDM} />
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
