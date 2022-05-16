import ProjectLayout1 from "../../Components/ProjectLayout1";
import Picture1 from "../../Assets/Images/FPCC/Sketch1.png";

export function ProjectLayout3Container() {
  return (
    <ProjectLayout1.Container>
      <ProjectLayout1>
          <ProjectLayout1.Text>
            <ProjectLayout1.Title>Design Sketches (Version 2)</ProjectLayout1.Title>
            <ProjectLayout1.Content>
            After testing the first versions of our physical mockups in the workshop, we decided to eliminate the pulley band concept 
            and move forward with the other two concepts instead, focusing on improving the designs depicted by working out the mechanics 
            of the two designs.
            </ProjectLayout1.Content>
          </ProjectLayout1.Text>
          <ProjectLayout1.PicGroup>
              <ProjectLayout1.Picture src={Picture1} width="50%"></ProjectLayout1.Picture>
          </ProjectLayout1.PicGroup>
      </ProjectLayout1>
    </ProjectLayout1.Container>
  );
}