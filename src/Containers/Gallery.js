import FeaturedWork from "../Components/FeaturedWork/index";
import Rendering from "../Assets/Images/Rendering.jpg";

export function GalleryContainer() {
  return (
    <FeaturedWork.Container>
      <FeaturedWork>
          <FeaturedWork.Title>Side Projects Gallery</FeaturedWork.Title>
          <FeaturedWork.Group>
                <a href="rendering">
                    <FeaturedWork.Box>
                        <FeaturedWork.Icon src={Rendering} />
                    </FeaturedWork.Box>
                </a>
                <a href="rendering">
                    <FeaturedWork.Box>
                        <FeaturedWork.Icon src={Rendering} />
                    </FeaturedWork.Box>
                </a>
          </FeaturedWork.Group>
      </FeaturedWork>
    </FeaturedWork.Container>
  );
}