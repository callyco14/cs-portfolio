import ProjectLayout2 from "../../Components/ProjectLayout2";
import Picture1 from "../../Assets/Images/FPCC/Sketch2.png";

export function ProjectLayout8Container() {
  return (
    <ProjectLayout2.Container>
      <ProjectLayout2>
            <ProjectLayout2.Text>
                <ProjectLayout2.Title>Final Prototype​</ProjectLayout2.Title>
                <ProjectLayout2.Content>
                This is the final prototype, “Handy Stand”, that our group came up with attached to a recumbent tricycle for better 
                visualization. It has easily adjustable handlebars that are customizable to meet user preferences. It has an easily 
                deployable kickstand that prevents tipping and provides extra stability.
                </ProjectLayout2.Content>
            </ProjectLayout2.Text>
            <ProjectLayout2.PicGroup>
                <ProjectLayout2.Picture src={Picture1} width="50%"></ProjectLayout2.Picture>
            </ProjectLayout2.PicGroup>
      </ProjectLayout2>
    </ProjectLayout2.Container>
  );
}