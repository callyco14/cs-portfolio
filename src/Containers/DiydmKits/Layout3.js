import ProjectLayout1 from "../../Components/ProjectLayout1";
import Picture1 from "../../Assets/Images/DIYDMKits/IMG_2481.JPG";
import Picture2 from "../../Assets/Images/DIYDMKits/IMG_2482.JPG";
import Picture3 from "../../Assets/Images/DIYDMKits/IMG_2480.JPG";

export function ProjectLayout3Container() {
  return (
    <ProjectLayout1.Container>
      <ProjectLayout1>
          <ProjectLayout1.Text>
            <ProjectLayout1.Title>Fine-tuning the manufacturing process for clinical trials</ProjectLayout1.Title>
            <ProjectLayout1.Content>As we began mass production in preparation for the fall clinical trials, some of the bottlenecks that I was tasked with resolving included the following:</ProjectLayout1.Content>
            <ProjectLayout1.Content>
              <ul>
                <li>Material shortages </li>
                <li>Troubleshooting the vacuum forming and instruction laminating processes</li>
                <li>Creating efficient mass production methods</li>
              </ul>
            </ProjectLayout1.Content>
          </ProjectLayout1.Text>
          <ProjectLayout1.PicGroup>
              <ProjectLayout1.Picture src={Picture1} width="25%"></ProjectLayout1.Picture>
              <ProjectLayout1.Picture src={Picture2} width="25%"></ProjectLayout1.Picture>
              <ProjectLayout1.Picture src={Picture3} width="25%"></ProjectLayout1.Picture>
          </ProjectLayout1.PicGroup>
      </ProjectLayout1>
    </ProjectLayout1.Container>
  );
}