import AboutMe from "../Components/AboutMe/index";
import Headshot from "../Assets/Images/AboutMeImage.JPG";

export function AboutMeContainer() {
  return (
    <AboutMe.Container>
      <AboutMe>
        <AboutMe.Title>About Me</AboutMe.Title>
        <AboutMe.Group>
          <AboutMe.Text>
            <AboutMe.Content>Hi, I'm...</AboutMe.Content>
            <AboutMe.Name>Callista Sukohardjo</AboutMe.Name>
            <AboutMe.Content>
              I am a junior working on a B.S. in Manufacturing and Design
              Engineering at Northwestern University, along with the Kellogg
              Managerial Analytics Certificate and the ISEN (Institute for
              Sustainability and Energy at Northwestern) Certificate.
              <br />
              <br />
              My philosophy is designing for a difference; so if I’m not in the
              NU Rapid Prototyping Lab helping someone make their designs come
              to life, or collaborating on another health-focused design
              project, you can find me working on SmartTree and promoting
              sustainability through Northwestern’s Engineers for a Sustainable
              World Chapter (ESWNU).
              <br />
              <br />
              You can find my resume <a href="resume">here</a>. Please don’t hesitate to reach out if
              you’d like to learn more about me or collaborate!
            </AboutMe.Content>
          </AboutMe.Text>
          <AboutMe.Picture src={Headshot} />
        </AboutMe.Group>
      </AboutMe>
    </AboutMe.Container>
  );
}
