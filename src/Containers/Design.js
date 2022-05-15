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
                <a href="foodies-app">
                    <FeaturedWork.Box title="Foodies App" image={Foodies1}/>
                </a>
                <a href="memories-app">
                    <FeaturedWork.Box title="Memories App" image={Memory1}/>
                </a>
          </FeaturedWork.Group>
      </FeaturedWork>
    </FeaturedWork.Container>
  );
}