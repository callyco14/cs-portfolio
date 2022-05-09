import ProjectOverview from "../../Components/ProjectOverview";

export function OverviewContainer() {
  return (
    <ProjectOverview.Container>
      <ProjectOverview>
          <ProjectOverview.Group>
              <ProjectOverview.Content>The objective of this project was to create a diabetes management kit that aids patients recently diagnosed with diabetes with managing their diagnosis.</ProjectOverview.Content>
              <ProjectOverview.Content>
                Client: <b>Feinberg School of Medicine</b>
                <br/>
                Duration: <b>June 2021 - Present</b>
                <br/>
                Role: <b>Engineering Design Intern</b>
                <br/>
                Deliverables: <b>Physical Prototype, Documentation</b>
              </ProjectOverview.Content>
          </ProjectOverview.Group>
          <ProjectOverview.Group>
              <ProjectOverview.Tag>3D Printing</ProjectOverview.Tag>
              <ProjectOverview.Tag>Collaboration</ProjectOverview.Tag>
              <ProjectOverview.Tag>Computer-Aided Design (CAD)</ProjectOverview.Tag>
              <ProjectOverview.Tag>Laser Cutting</ProjectOverview.Tag>
              <ProjectOverview.Tag>Vacuum Forming</ProjectOverview.Tag>
              <ProjectOverview.Tag>UX Design</ProjectOverview.Tag>
          </ProjectOverview.Group>
      </ProjectOverview>
    </ProjectOverview.Container>
  );
}
