import FeaturedWork from "../Components/FeaturedWork/index";
import Rendering from "../Assets/Images/Rendering.jpg";

export function GalleryContainer() {
  return (
    <FeaturedWork.Container>
      <FeaturedWork>
          <FeaturedWork.Title>Side Projects Gallery</FeaturedWork.Title>
          <FeaturedWork.Group>
            <a href="handy-stand">
                  <FeaturedWork.Box title="Rendering" image={Rendering}/>
            </a>
            <a href="handy-stand">
                  <FeaturedWork.Box title="Rendering" image={Rendering}/>
            </a>
          </FeaturedWork.Group>
      </FeaturedWork>
    </FeaturedWork.Container>
  );
}