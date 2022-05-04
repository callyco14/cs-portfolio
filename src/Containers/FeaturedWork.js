import FeaturedWork from "../Components/FeaturedWork/index";
import Headshot from "../Assets/Images/IMG_6862.png";
import DIYDM from "../Assets/Images/IMG_4146.JPG";

export function FeaturedWorkContainer() {
  return (
    <FeaturedWork.Container>
      <FeaturedWork>
        <FeaturedWork.Section>
          <FeaturedWork.Title>Featured Work</FeaturedWork.Title>
          <FeaturedWork.Group>
            <FeaturedWork.Box>
              <FeaturedWork.Icon src={DIYDM} />
            </FeaturedWork.Box>
            <FeaturedWork.Box>
              <FeaturedWork.Icon src={Headshot} />
            </FeaturedWork.Box>
          </FeaturedWork.Group>
          <FeaturedWork.Group>
            <FeaturedWork.Box>
              <FeaturedWork.Icon src={Headshot} />
            </FeaturedWork.Box>
            <FeaturedWork.Box>
              <FeaturedWork.Icon src={DIYDM} />
            </FeaturedWork.Box>
          </FeaturedWork.Group>
          <FeaturedWork.Group>
            <FeaturedWork.Box>
              <FeaturedWork.Icon src={DIYDM} />
            </FeaturedWork.Box>
            <FeaturedWork.Box>
              <FeaturedWork.Icon src={Headshot} />
            </FeaturedWork.Box>
          </FeaturedWork.Group>
        </FeaturedWork.Section>
      </FeaturedWork>
    </FeaturedWork.Container>
  );
}
