import ProjectLayout2 from "../../Components/ProjectLayout2";
import Picture1 from "../../Assets/Images/FPCC/PicnicShelter2.JPG";
import Picture2 from "../../Assets/Images/FPCC/PicnicShelter9.jpg";
import Picture3 from "../../Assets/Images/FPCC/PicnicShelter3.JPG";

export function ContextContainer() {
  return (
    <ProjectLayout2.Container>
    <ProjectLayout2>
          <ProjectLayout2.Text>
              <ProjectLayout2.Title>Context</ProjectLayout2.Title>
              <ProjectLayout2.Content>
                  This is a sustainability-focused project that is part of Northwestern's Design, Thinking, and Communication Course and a collaboration between Callista Sukohardjo, Johanna Kann, Leonardo Lopez, and William He
                  <br/><br/>
                  Our group approached this project by each focusing and developing 1 of 4 solutions, with input from the rest of the team and other consultants. The 4 solutions we came up with -- the separation concept, the shelf concept, the catcher concept (which was later combined with the shelf concept to become the Shelfter and Guano Guard concept), and the separate alternative nesting site concept -- were all presented as a portfolio of solutions for the client.
                  <br/><br/>
                  The rest of the section will focus on my specific contribution to the project, the separate alternative nesting site concept.
              </ProjectLayout2.Content>
          </ProjectLayout2.Text>
          <ProjectLayout2.PicGroup>
              <ProjectLayout2.Picture src={Picture1}></ProjectLayout2.Picture>
              <ProjectLayout2.Picture src={Picture2}></ProjectLayout2.Picture>
              <ProjectLayout2.Picture src={Picture3}></ProjectLayout2.Picture>
          </ProjectLayout2.PicGroup>
    </ProjectLayout2>
    </ProjectLayout2.Container>
  );
}
