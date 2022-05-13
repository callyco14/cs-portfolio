import ProjectLayout1 from "../../Components/ProjectLayout1";
import Picture1 from "../../Assets/Images/FPCC/Separation1.png";
import Picture2 from "../../Assets/Images/FPCC/Separation2.png";
import Picture3 from "../../Assets/Images/FPCC/Ajoined1.png";
import Picture4 from "../../Assets/Images/FPCC/Ajoined2.png";
import Picture5 from "../../Assets/Images/FPCC/Ajoined3.png";

export function ProjectLayout7Container() {
  return (
    <ProjectLayout1.Container>
      <ProjectLayout1>
          <ProjectLayout1.Text>
            <ProjectLayout1.Title>Other final prototypes</ProjectLayout1.Title>
            <ProjectLayout1.Content>
              These are CAD models I created of all the other solutions our group presented to our client.
            </ProjectLayout1.Content>
            <br/>
            <ProjectLayout1.Content>
            <b>Separation concept developed by Johanna Kann</b>
            </ProjectLayout1.Content>
          </ProjectLayout1.Text>
          <ProjectLayout1.PicGroup>
              <ProjectLayout1.Picture src={Picture1} width="40%"></ProjectLayout1.Picture>
              <ProjectLayout1.Picture src={Picture2} width="40%"></ProjectLayout1.Picture>
          </ProjectLayout1.PicGroup>
          <br/><br/>
          <ProjectLayout1.Content>
              <b>Shelfter and Guano Guard concept developed by Leonardo Lopez and William He</b>
          </ProjectLayout1.Content>
          <ProjectLayout1.PicGroup>
              <ProjectLayout1.Picture src={Picture3} width="40%"></ProjectLayout1.Picture>
              <br/>
              <ProjectLayout1.Picture src={Picture4} width="40%"></ProjectLayout1.Picture>
              <ProjectLayout1.Picture src={Picture5} width="40%"></ProjectLayout1.Picture>
          </ProjectLayout1.PicGroup>
      </ProjectLayout1>
    </ProjectLayout1.Container>
  );
}