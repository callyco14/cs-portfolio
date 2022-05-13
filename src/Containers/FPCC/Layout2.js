import ProjectLayout2 from "../../Components/ProjectLayout2";
import Picture1 from "../../Assets/Images/FPCC/Sketch2.png";

export function ProjectLayout2Container() {
  return (
    <ProjectLayout2.Container>
      <ProjectLayout2>
            <ProjectLayout2.Text>
                <ProjectLayout2.Title>Alternative nesting site (separate)</ProjectLayout2.Title>
                <ProjectLayout2.Content>
                    My group and I narrowed the solutions down to 4 main types, with each of us focusing on one of the 4 solutions. I focused on developing the separate alternative nesting site concept.
                </ProjectLayout2.Content>
            </ProjectLayout2.Text>
            <ProjectLayout2.PicGroup>
                <ProjectLayout2.Picture src={Picture1} width="50%"></ProjectLayout2.Picture>
            </ProjectLayout2.PicGroup>
      </ProjectLayout2>
    </ProjectLayout2.Container>
  );
}