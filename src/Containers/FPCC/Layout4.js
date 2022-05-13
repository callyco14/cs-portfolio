import ProjectLayout2 from "../../Components/ProjectLayout2";
import Picture1 from "../../Assets/Images/FPCC/IMG_8764.JPG";
import Picture2 from "../../Assets/Images/FPCC/IMG_8765.JPG";
import Picture3 from "../../Assets/Images/FPCC/IMG_8760.JPG";
import Picture4 from "../../Assets/Images/FPCC/IMG_8761.JPG";
import Picture5 from "../../Assets/Images/FPCC/IMG_8763.JPG";
import Picture6 from "../../Assets/Images/FPCC/IMG_8767.JPG";
import Picture7 from "../../Assets/Images/FPCC/IMG_8768.JPG";
import Picture8 from "../../Assets/Images/FPCC/IMG_8769.JPG";

export function ProjectLayout4Container() {
  return (
    <ProjectLayout2.Container>
      <ProjectLayout2>
            <ProjectLayout2.Text>
                <ProjectLayout2.Title>Physical mockups</ProjectLayout2.Title>
                <ProjectLayout2.Content>
                  These are physical mockups of the circular-platforms model, rectangular-cubbies model, and the square-shelving model. Due to COVID-19, my group and I made mockups of our respective concepts with materials from home. My mockups were made of craft paper, thin cardboard, and popsicle sticks.
                </ProjectLayout2.Content>
            </ProjectLayout2.Text>
            <ProjectLayout2.PicGroup>
                <ProjectLayout2.Picture src={Picture1} width="20%"></ProjectLayout2.Picture>
                <ProjectLayout2.Picture src={Picture2} width="20%"></ProjectLayout2.Picture>
                <br/>
                <ProjectLayout2.Picture src={Picture3} width="20%"></ProjectLayout2.Picture>
                <ProjectLayout2.Picture src={Picture4} width="20%"></ProjectLayout2.Picture>
                <ProjectLayout2.Picture src={Picture5} width="20%"></ProjectLayout2.Picture>
                <br/>
                <ProjectLayout2.Picture src={Picture6} width="20%"></ProjectLayout2.Picture>
                <ProjectLayout2.Picture src={Picture7} width="20%"></ProjectLayout2.Picture>
                <ProjectLayout2.Picture src={Picture8} width="20%"></ProjectLayout2.Picture>
            </ProjectLayout2.PicGroup>
      </ProjectLayout2>
    </ProjectLayout2.Container>
  );
}