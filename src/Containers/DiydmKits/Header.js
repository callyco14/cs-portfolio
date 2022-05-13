import ProjectHeader from "../../Components/ProjectHeader";
import Before from "../../Assets/Images/DIYDMKits/IMG_1940.jpg";
import After from "../../Assets/Images/DIYDMKits/IMG_2480.JPG";

export function HeaderContainer() {
  return (
    <ProjectHeader.Container>
      <ProjectHeader>
        <ProjectHeader.Title>DIY-DM Kits</ProjectHeader.Title>
        <ProjectHeader.Transformation>
          <ProjectHeader.Group>
            <ProjectHeader.Picture src={Before}/>
            <ProjectHeader.Content>Before</ProjectHeader.Content>
          </ProjectHeader.Group>
          <ProjectHeader.Group>
            <ProjectHeader.Picture src={After}/>
            <ProjectHeader.Content>After</ProjectHeader.Content>
          </ProjectHeader.Group>
        </ProjectHeader.Transformation>
      </ProjectHeader>
    </ProjectHeader.Container>
  );
}
