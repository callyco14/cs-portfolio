import ProjectLayout1 from "../../Components/ProjectLayout1";
import Picture1 from "../../Assets/Images/FPCC/Sketch1.png";

export function ProjectLayout7Container() {
  return (
    <ProjectLayout1.Container>
      <ProjectLayout1>
          <ProjectLayout1.Text>
            <ProjectLayout1.Title>Final Design Sketches</ProjectLayout1.Title>
            <ProjectLayout1.Content>
            After working through the designs, we decided to eliminate the seat lift concept and settled on the “Handy Stand”.
            </ProjectLayout1.Content>
          </ProjectLayout1.Text>
          <ProjectLayout1.PicGroup>
              <ProjectLayout1.Picture src={Picture1} width="50%"></ProjectLayout1.Picture>
          </ProjectLayout1.PicGroup>
      </ProjectLayout1>
    </ProjectLayout1.Container>
  );
}