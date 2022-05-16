import ProjectLayout2 from "../../Components/ProjectLayout2";
import Picture1 from "../../Assets/Images/FPCC/Sketch2.png";

export function ProjectLayout6Container() {
  return (
    <ProjectLayout2.Container>
      <ProjectLayout2>
            <ProjectLayout2.Text>
                <ProjectLayout2.Title>Physical Mockups (Version 3)</ProjectLayout2.Title>
                <ProjectLayout2.Content>
                We created a third version of the designs to test different aspects of the solutions we presented, including how we 
                could make the rotating pole and kickstand more accessible for users and what kinds of materials we could use to make 
                the seat lift more comfortable to sit on.
                </ProjectLayout2.Content>
            </ProjectLayout2.Text>
            <ProjectLayout2.PicGroup>
                <ProjectLayout2.Picture src={Picture1} width="50%"></ProjectLayout2.Picture>
            </ProjectLayout2.PicGroup>
      </ProjectLayout2>
    </ProjectLayout2.Container>
  );
}