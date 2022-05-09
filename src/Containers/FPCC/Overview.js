import ProjectOverview from "../../Components/ProjectOverview";

export function OverviewContainer() {
  return (
    <ProjectOverview.Container>
      <ProjectOverview>
          <ProjectOverview.Group>
              <ProjectOverview.Content>
                The objective of this project was to prevent barn swallow droppings from contaminating the tables in the picnic shelters at the Forest Preserves of Cook County.
                <br/><br/>
                Research Question: How do we prevent barn swallow droppings from contaminating the tables in the picnic shelters at the Forest Preserves of Cook County, while ensuring that the barn swallows still have adequate places to nest?
              </ProjectOverview.Content>
              <ProjectOverview.Content>
                Client: <b>Forest Preserves of Cook County (FPCC)</b>
                <br/>
                Duration: <b>March - June 2020</b>
                <br/>
                Role: <b>Engineering Student</b>
                <br/>
                Deliverables: <b>Final Report, Presentation, Hand-drawn and CAD Visuals</b>
              </ProjectOverview.Content>
          </ProjectOverview.Group>
          <ProjectOverview.Group>
              <ProjectOverview.Tag>Collaboration</ProjectOverview.Tag>
              <ProjectOverview.Tag>Computer-Aided Design (CAD)</ProjectOverview.Tag>
              <ProjectOverview.Tag>Engineering Drawing</ProjectOverview.Tag>
          </ProjectOverview.Group>
      </ProjectOverview>
    </ProjectOverview.Container>
  );
}
