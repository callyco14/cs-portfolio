import ProjectLayout1 from "../../Components/ProjectLayout1";
import Picture1 from "../../Assets/Images/FPCC/Sketch1.png";

export function ProjectLayout5Container() {
  return (
    <ProjectLayout1.Container>
      <ProjectLayout1>
          <ProjectLayout1.Text>
            <ProjectLayout1.Title>Design Sketches (Version 3)</ProjectLayout1.Title>
            <ProjectLayout1.Content>
            After user testing our designs, we improved our designs by adding extra features that users identified would improve the designs.
            </ProjectLayout1.Content>
          </ProjectLayout1.Text>
          <ProjectLayout1.PicGroup>
              <ProjectLayout1.Picture src={Picture1} width="50%"></ProjectLayout1.Picture>
          </ProjectLayout1.PicGroup>
      </ProjectLayout1>
    </ProjectLayout1.Container>
  );
}