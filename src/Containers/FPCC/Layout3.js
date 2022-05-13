import ProjectLayout1 from "../../Components/ProjectLayout1";
import Picture1 from "../../Assets/Images/FPCC/Sketch3.png";

export function ProjectLayout3Container() {
  return (
    <ProjectLayout1.Container>
      <ProjectLayout1>
          <ProjectLayout1.Text>
            <ProjectLayout1.Title>Mockup sketches</ProjectLayout1.Title>
            <ProjectLayout1.Content>
              These sketches were created to explore possible ways to modify the features of the separate alternative nesting site. Some of these features include the shapes of this shelter and ways to allocate the space within the shelter for the bird nests.
            </ProjectLayout1.Content>
          </ProjectLayout1.Text>
          <ProjectLayout1.PicGroup>
              <ProjectLayout1.Picture src={Picture1} width="50%"></ProjectLayout1.Picture>
          </ProjectLayout1.PicGroup>
      </ProjectLayout1>
    </ProjectLayout1.Container>
  );
}