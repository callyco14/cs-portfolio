import ProjectLayout1 from "../../Components/ProjectLayout1";
import Picture1 from "../../Assets/Images/DIYDMKits/Screenshot(229).png";
import Picture2 from "../../Assets/Images/DIYDMKits/IMG_2114.jpg";
import Picture3 from "../../Assets/Images/DIYDMKits/IMG_2129.jpg";
import Picture4 from "../../Assets/Images/DIYDMKits/IMG_2696.JPG";

export function ProjectLayout1Container() {
  return (
    <ProjectLayout1.Container>
      <ProjectLayout1>
          <ProjectLayout1.Text>
            <ProjectLayout1.Title>Designing a numerical labelling system</ProjectLayout1.Title>
            <ProjectLayout1.Content>One of the major pain points identified through user testing was that older patients had difficulty identifying how components of the kit fit into the plastic inserts within each box.</ProjectLayout1.Content>
            <br/>
            <ProjectLayout1.Content>To solve that issue, I suggested creating a numerical labeling system that mapped each section of the plastic inserts to the stickers found on the inner side of the lids.</ProjectLayout1.Content>
          </ProjectLayout1.Text>
          <ProjectLayout1.PicGroup>
              <ProjectLayout1.Picture src={Picture1}></ProjectLayout1.Picture>
              <ProjectLayout1.Picture src={Picture2}></ProjectLayout1.Picture>
              <ProjectLayout1.Picture src={Picture3}></ProjectLayout1.Picture>
          </ProjectLayout1.PicGroup>
          <ProjectLayout1.Text>
            <ProjectLayout1.Title>Design process</ProjectLayout1.Title>
            <ProjectLayout1.Content>1. Determining the best type of labeling system (text, numerical, etc.)</ProjectLayout1.Content>
            <br/>
            <ProjectLayout1.Content>2. Determining the best method of creating the labels (embossing, debossing, silk screening, etc.)</ProjectLayout1.Content>
            <br/>
            <ProjectLayout1.Content>3. Creating a proof of concept</ProjectLayout1.Content>
            <br/>
            <ProjectLayout1.Content>4. Creating new vacuum forming molds for each type of insert</ProjectLayout1.Content>
            <br/>
            <ProjectLayout1.Content>5. Troubleshooting the vacuum forming process</ProjectLayout1.Content>
            <br/>
            <ProjectLayout1.Content>6. Mass-producing the vacuum-formed inserts</ProjectLayout1.Content>
          </ProjectLayout1.Text>
          <ProjectLayout1.Group>
            <ProjectLayout1.Picture src={Picture4}></ProjectLayout1.Picture>
            <ProjectLayout1.Text>
                <ProjectLayout1.Title>Results</ProjectLayout1.Title>
                <ProjectLayout1.Content>
                    <ul>
                        <li>Improved packing time and increased object recognition during subsequent user tests</li>
                        <br/>
                        <li>Decreased confusion amongst older patients in their interactions with the kits</li>
                        <br/>
                        <li>Little to no mention of aforementioned pain points in future observations</li>
                    </ul>
                </ProjectLayout1.Content>
          </ProjectLayout1.Text>
          </ProjectLayout1.Group>
      </ProjectLayout1>
    </ProjectLayout1.Container>
  );
}