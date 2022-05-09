import ProjectHeader from "../../Components/ProjectHeader";
import Before from "../../Assets/Images/FPCC/PicnicShelter2.JPG";
import After from "../../Assets/Images/FPCC/AlternativeShelter.png";

export function HeaderContainer() {
  return (
    <ProjectHeader.Container>
      <ProjectHeader>
        <ProjectHeader.Title>Bird-Friendly Picnic Structures</ProjectHeader.Title>
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
