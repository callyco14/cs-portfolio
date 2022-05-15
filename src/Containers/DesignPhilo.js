import DesignPhilo from "../Components/DesignPhilo/index";

export function DesignPhiloContainer() {
  return (
    <DesignPhilo.Container>
      <DesignPhilo>
        <DesignPhilo.Group>
          <DesignPhilo.Title>Designing for a Difference</DesignPhilo.Title>
        </DesignPhilo.Group>
        <DesignPhilo.Group>
          <DesignPhilo.Start>
            I design to make a difference...
          </DesignPhilo.Start>
          <DesignPhilo.Philo>
            <br/>
            -- whether it is for a person, animal, community, or hopefully, the world.
            <br/><br/>
            -- with the types of products I create and the projects I work on, so that I leave every problem space better off than it was before.
          </DesignPhilo.Philo>
        </DesignPhilo.Group>
      </DesignPhilo>
    </DesignPhilo.Container>
  );
}
