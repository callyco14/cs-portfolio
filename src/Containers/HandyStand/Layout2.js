import ProjectLayout2 from "../../Components/ProjectLayout2";
import Picture1 from "../../Assets/Images/FPCC/Sketch2.png";

export function ProjectLayout2Container() {
  return (
    <ProjectLayout2.Container>
      <ProjectLayout2>
            <ProjectLayout2.Text>
                <ProjectLayout2.Title>Physical Mockups (Version 1)</ProjectLayout2.Title>
                <ProjectLayout2.Content>
                Our group created the first physical mockups of our proposed solutions using materials available in the workshop and our 
                class created a makeshift version of a recumbent tricycle to use for testing our solutions.
                </ProjectLayout2.Content>
            </ProjectLayout2.Text>
            <ProjectLayout2.PicGroup>
                <ProjectLayout2.Picture src={Picture1} width="50%"></ProjectLayout2.Picture>
            </ProjectLayout2.PicGroup>
      </ProjectLayout2>
    </ProjectLayout2.Container>
  );
}