import ProjectOverview from "../../Components/ProjectOverview";

export function OverviewContainer() {
  return (
    <ProjectOverview.Container>
      <ProjectOverview>
          <ProjectOverview.Content>
            Research Question: How can we help people with disabilities get into and out of recumbent tricycles 
            while encouraging greater independence?
          </ProjectOverview.Content>
          <ProjectOverview.Group>
              <ProjectOverview.Content>
                The objective of this project was to create a device that would help people with disabilities 
                get into and out of recumbent tricycles.
                <br/><br/>
                This is a disability-focused project that is part of Northwestern's Design, Thinking, and Communication Course and 
                a collaboration between Callista Sukohardjo, Cindy Hu, Sam Griswold, and William He
              </ProjectOverview.Content>
              <ProjectOverview.Content>
                Client: <b>Shirley Ryan AbilityLab (SRAL)</b>
                <br/>
                Duration: <b>September - December 2019</b>
                <br/>
                Role: <b>Engineering Student</b>
                <br/>
                Deliverables: <b>Final Report, Poster, Hand-drawn Visuals, Physical Prototype​</b>
                <br/><br/>
              </ProjectOverview.Content>
          </ProjectOverview.Group>
          <ProjectOverview.Group>
              <ProjectOverview.Tag>Collaboration</ProjectOverview.Tag>
              <ProjectOverview.Tag>Computer-Aided Design (CAD)</ProjectOverview.Tag>
              <ProjectOverview.Tag>Metalworking</ProjectOverview.Tag>
          </ProjectOverview.Group>
      </ProjectOverview>
    </ProjectOverview.Container>
  );
}
