import ProjectLayout2 from "../../Components/ProjectLayout2";
import Picture1 from "../../Assets/Images/FPCC/FinalCAD1.jpg";
import Picture2 from "../../Assets/Images/FPCC/FinalCAD2.jpg";

export function ProjectLayout6Container() {
  return (
    <ProjectLayout2.Container>
      <ProjectLayout2>
            <ProjectLayout2.Text>
                <ProjectLayout2.Title>Final design CAD model</ProjectLayout2.Title>
                <ProjectLayout2.Content>
                These are the final designs for my separate alternative nesting site concept created using SketchUp. 
                The roof has 3 layers, plywood, felt roofing, and roof shingles, to insulate heat and protect the birds from harsh 
                weather and vandalism. The shelves are attached to the main body using wood glue and brackets. The rectangular shape 
                optimizes the perimeter available and mimics the picnic shelters. The shelves are spaced to optimize area while giving 
                the barn swallows personal space. The posts go 3.5’ into the ground and 2.5’ into the main body to ensure they are 
                securely grounded and attached to the body.
                </ProjectLayout2.Content>
            </ProjectLayout2.Text>
            <ProjectLayout2.PicGroup>
                <ProjectLayout2.Picture src={Picture1} width="45%"></ProjectLayout2.Picture>
                <ProjectLayout2.Picture src={Picture2} width="45%"></ProjectLayout2.Picture>
            </ProjectLayout2.PicGroup>
      </ProjectLayout2>
    </ProjectLayout2.Container>
  );
}