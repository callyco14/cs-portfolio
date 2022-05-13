import ProjectLayout2 from "../../Components/ProjectLayout2";
import Picture1 from "../../Assets/Images/DIYDMKits/IMG_2614.JPG";
import Picture2 from "../../Assets/Images/DIYDMKits/IMG_2822.JPG";

export function ProjectLayout2Container() {
  return (
    <ProjectLayout2.Container>
      <ProjectLayout2>
            <ProjectLayout2.Text>
                <ProjectLayout2.Title>Skin mold testing</ProjectLayout2.Title>
                <ProjectLayout2.Content>Another important component of the DIY-DM kits was the skin molds, which were included in the kit to provide users with a fake skin sample on which to practice injecting insulin.</ProjectLayout2.Content>
                <br/>
                <ProjectLayout2.Content>There were a number of questions associated to the design of these molds, as listed below:</ProjectLayout2.Content>
                <ProjectLayout2.Content>
                    <ul>
                        <li>Which solvent ratios would replicate the consistency of human skin the best?</li>
                        <li>Which ratios would accommodate the most amount of saline solution to be injected into the mold?</li>
                        <li>How do we accomodate for representation in the skin molds that were included in the DIYDM kits?</li>
                    </ul>
                </ProjectLayout2.Content>
            </ProjectLayout2.Text>
            <ProjectLayout2.PicGroup>
                <ProjectLayout2.Picture src={Picture1} width="50%"></ProjectLayout2.Picture>
            </ProjectLayout2.PicGroup>
            <ProjectLayout2.Text>
                <ProjectLayout2.Title>Design process</ProjectLayout2.Title>
                <ProjectLayout2.Content>
                    <ol>
                        <li>Design a system to generate different solvent ratios</li>
                        <li>Create tests to determine the maximum amount of saline each skin mold consistency could contain</li>
                        <li>Determine the range of skin colors represented with the skin molds</li>
                        <li>Test methods to create repeatable skin mold colors</li>
                    </ol>
                </ProjectLayout2.Content>
            </ProjectLayout2.Text>
            <ProjectLayout2.Title>Final skin mold spectrum</ProjectLayout2.Title>
            <ProjectLayout2.PicGroup>
                <ProjectLayout2.Picture src={Picture2} width="50%"></ProjectLayout2.Picture>
            </ProjectLayout2.PicGroup>
      </ProjectLayout2>
    </ProjectLayout2.Container>
  );
}