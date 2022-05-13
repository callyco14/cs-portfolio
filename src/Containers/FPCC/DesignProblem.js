import ProjectLayout2 from "../../Components/ProjectLayout2";
import Picture1 from "../../Assets/Images/FPCC/PicnicShelter2.JPG";
import Picture2 from "../../Assets/Images/FPCC/PicnicShelter9.jpg";
import Picture3 from "../../Assets/Images/FPCC/PicnicShelter3.JPG";
import Picture4 from "../../Assets/Images/FPCC/BirdNet8.jpg";
import Picture5 from "../../Assets/Images/FPCC/BirdSpikes3.JPG";
import Picture6 from "../../Assets/Images/FPCC/BlueCeiling2.JPG";

export function DesignProblemContainer() {
  return (
    <ProjectLayout2.Container>
    <ProjectLayout2>
          <ProjectLayout2.Text>
              <ProjectLayout2.Title>Design Problem</ProjectLayout2.Title>
              <ProjectLayout2.Content>
                  FPCC visitors complained of the barn swallow droppings on picnic tables due to the barn swallows nesting in the rafters 
                  of the picnic shelters. Alternative solutions to deter the barn swallows such as netting, spikes, and blue paint were 
                  unsuccessful. Our group was tasked with designing a product that prevents the droppings from contaminating the tables 
                  while ensuring the barn swallows still have adequate places to nest.
              </ProjectLayout2.Content>
          </ProjectLayout2.Text>
          <ProjectLayout2.PicGroup>
              <ProjectLayout2.Picture src={Picture1} width="27%"></ProjectLayout2.Picture>
              <ProjectLayout2.Picture src={Picture2} width="27%"></ProjectLayout2.Picture>
              <ProjectLayout2.Picture src={Picture3} width="27%"></ProjectLayout2.Picture>
              <ProjectLayout2.Picture src={Picture4} width="27%"></ProjectLayout2.Picture>
              <ProjectLayout2.Picture src={Picture5} width="27%"></ProjectLayout2.Picture>
              <ProjectLayout2.Picture src={Picture6} width="27%"></ProjectLayout2.Picture>
          </ProjectLayout2.PicGroup>
    </ProjectLayout2>
    </ProjectLayout2.Container>
  );
}
