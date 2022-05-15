import ProjectLayout2 from "../../Components/ProjectLayout2";
import Picture1 from "../../Assets/Images/IMG_4146.JPG";

export function ContextContainer() {
  return (
    <ProjectLayout2.Container>
      <ProjectLayout2>
          <ProjectLayout2.Group>
            <ProjectLayout2.Picture src={Picture1} width="25%"></ProjectLayout2.Picture>
            <ProjectLayout2.Text>
                <ProjectLayout2.Title>Context</ProjectLayout2.Title>
                <ProjectLayout2.Content>
                  The DIY-DM kits are part of an NIH-sponsored project with collaborators from Northwestern’s Feinberg School of Medicine and the Segal Design Institute.
                  <br/><br/>
                  My main role in this project was to suggest and implement design solutions to improve the user experience of the DIY-DM kits based on different user group feedback over the summer.
                  <br/><br/>
                  Once the major design problems that needed to be addressed were solved, my role transitioned from designing to overseeing and documenting the manufacturing process of 120 of these DIY diabetic management (DM) kits for NIH-sponsored clinical trials set to begin in the fall.
                </ProjectLayout2.Content>
          </ProjectLayout2.Text>
          </ProjectLayout2.Group>
      </ProjectLayout2>
    </ProjectLayout2.Container>
  );
}
