import ProjectHeader from "../../Components/ProjectHeader";
import Picture1 from "../../Assets/Images/Rendering/Toothbrush.jpg";
import Picture2 from "../../Assets/Images/Rendering/Headphones.jpg";
import Picture3 from "../../Assets/Images/Rendering/DetergentBottle.jpg";
import Picture4 from "../../Assets/Images/Rendering/Gameboy1.jpg";
import Picture5 from "../../Assets/Images/Rendering/Gameboy2.jpg";

export function Layout1Container() {
  return (
    <ProjectHeader.Container>
      <ProjectHeader>
        <ProjectHeader.Title>Rendering</ProjectHeader.Title>
        <ProjectHeader.Blurb>
            This is a collection of rendering exercises I completed through Northwestern's Design 322-0 course
        </ProjectHeader.Blurb>
        <br/>
        <ProjectHeader.PicGroup>
          <ProjectHeader.Picture src={Picture1} width="40%"/>
          <ProjectHeader.Picture src={Picture2} width="40%"/>
          <br/><br/>
          <ProjectHeader.Picture src={Picture3} width="40%"/>
          <br/><br/>
          <ProjectHeader.Picture src={Picture4} width="40%"/>
          <ProjectHeader.Picture src={Picture5} width="40%"/>
        </ProjectHeader.PicGroup>
      </ProjectHeader>
    </ProjectHeader.Container>
  );
}
