import FeaturedWork from "../Components/FeaturedWork/index";
import Foodies1 from "../Assets/Images/Foodies1.png";
import Foodies2 from "../Assets/Images/Foodies2.png";
import Memory1 from "../Assets/Images/Memory1.png";
import Memory2 from "../Assets/Images/Memory2.png";

export function DesignContainer() {
  return (
    <FeaturedWork.Container>
      <FeaturedWork>
          <FeaturedWork.Title>Design Projects</FeaturedWork.Title>
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
      </FeaturedWork>
    </FeaturedWork.Container>
  );
}