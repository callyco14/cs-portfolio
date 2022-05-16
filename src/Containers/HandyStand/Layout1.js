import ProjectLayout1 from "../../Components/ProjectLayout1";
import Picture1 from "../../Assets/Images/FPCC/Sketch1.png";

export function ProjectLayout1Container() {
  return (
    <ProjectLayout1.Container>
      <ProjectLayout1>
          <ProjectLayout1.Text>
            <ProjectLayout1.Title>Design Sketches (Version 1)</ProjectLayout1.Title>
            <ProjectLayout1.Content>
            After speaking with our clients and users, my group and I started coming up with possible solutions to our design problem. 
            The solutions we decided to pursue are the pulley band concept, the seat lift concept, and the rotating pole with kickstand 
            concept.
            </ProjectLayout1.Content>
          </ProjectLayout1.Text>
          <ProjectLayout1.PicGroup>
              <ProjectLayout1.Picture src={Picture1} width="50%"></ProjectLayout1.Picture>
          </ProjectLayout1.PicGroup>
      </ProjectLayout1>
    </ProjectLayout1.Container>
  );
}