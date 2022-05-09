import FeaturedWork from "../Components/FeaturedWork/index";
import Headshot from "../Assets/Images/IMG_6862.png";
import DIYDM from "../Assets/Images/IMG_4146.JPG";

export function FeaturedWorkContainer() {
  return (
    <FeaturedWork.Container>
      <FeaturedWork>
          <FeaturedWork.Title>Featured Work</FeaturedWork.Title>
          <FeaturedWork.Group>
                <a href="diydmkits">
                    <FeaturedWork.Box>
                        <FeaturedWork.Icon src={DIYDM} />
                    </FeaturedWork.Box>
                </a>
                <a href="diydmkits">
                    <FeaturedWork.Box>
                        <FeaturedWork.Icon src={DIYDM} />
                    </FeaturedWork.Box>
                </a>
          </FeaturedWork.Group>
      </FeaturedWork>
    </FeaturedWork.Container>
  );
}
