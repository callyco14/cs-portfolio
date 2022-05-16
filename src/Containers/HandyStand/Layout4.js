import ProjectLayout2 from "../../Components/ProjectLayout2";
import Picture1 from "../../Assets/Images/FPCC/Sketch2.png";

export function ProjectLayout4Container() {
  return (
    <ProjectLayout2.Container>
      <ProjectLayout2>
            <ProjectLayout2.Text>
                <ProjectLayout2.Title>Physical Mockups (Version 2)</ProjectLayout2.Title>
                <ProjectLayout2.Content>
                We then modified our existing mockups and added more details to simulate possible ways we could achieve the mechanics we wanted.
                </ProjectLayout2.Content>
            </ProjectLayout2.Text>
            <ProjectLayout2.PicGroup>
                <ProjectLayout2.Picture src={Picture1} width="50%"></ProjectLayout2.Picture>
            </ProjectLayout2.PicGroup>
      </ProjectLayout2>
    </ProjectLayout2.Container>
  );
}