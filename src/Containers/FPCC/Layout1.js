import ProjectLayout1 from "../../Components/ProjectLayout1";
import Picture1 from "../../Assets/Images/FPCC/Sketch1.png";

export function ProjectLayout1Container() {
  return (
    <ProjectLayout1.Container>
      <ProjectLayout1>
          <ProjectLayout1.Text>
            <ProjectLayout1.Title>Brainstorming Sketches</ProjectLayout1.Title>
            <ProjectLayout1.Content>
              These are initial sketches of potential solutions that could be implemented at the FPCC picnic shelters.
            </ProjectLayout1.Content>
          </ProjectLayout1.Text>
          <ProjectLayout1.PicGroup>
              <ProjectLayout1.Picture src={Picture1} width="50%"></ProjectLayout1.Picture>
          </ProjectLayout1.PicGroup>
      </ProjectLayout1>
    </ProjectLayout1.Container>
  );
}