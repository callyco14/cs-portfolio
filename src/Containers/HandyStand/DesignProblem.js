import ProjectLayout2 from "../../Components/ProjectLayout2";
import Picture1 from "../../Assets/Images/FPCC/PicnicShelter2.JPG";
import Picture2 from "../../Assets/Images/FPCC/PicnicShelter9.jpg";

export function DesignProblemContainer() {
  return (
    <ProjectLayout2.Container>
    <ProjectLayout2>
          <ProjectLayout2.Text>
              <ProjectLayout2.Title>Design Problem</ProjectLayout2.Title>
              <ProjectLayout2.Content>
              SRAL is a rehabilitation center that offers programs for people with disabilities, including cycling with recumbent tricycles. 
              Some patients have difficulties getting into and out of the recumbent tricycles independently. Our group was tasked with 
              creating a device that would help patients use the recumbent tricycles with minimal assistance.
              </ProjectLayout2.Content>
          </ProjectLayout2.Text>
          <ProjectLayout2.PicGroup>
              <ProjectLayout2.Picture src={Picture1} width="27%"></ProjectLayout2.Picture>
              <ProjectLayout2.Picture src={Picture2} width="27%"></ProjectLayout2.Picture>
          </ProjectLayout2.PicGroup>
    </ProjectLayout2>
    </ProjectLayout2.Container>
  );
}
