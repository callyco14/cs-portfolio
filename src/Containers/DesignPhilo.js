import DesignPhilo from "../Components/DesignPhilo/index";
 
export function DesignPhiloContainer () {
   return (
       <DesignPhilo.Container>
           <DesignPhilo>
                <DesignPhilo.Group>
                    <DesignPhilo.Title>Designing for a Difference</DesignPhilo.Title>
                </DesignPhilo.Group>
                <DesignPhilo.Group>     
                    <DesignPhilo.Start>I design to make a difference...</DesignPhilo.Start>
                    <DesignPhilo.Philo>
                        <ul>
                            <li>Whether it is for a person, animal, community, or hopefully, the world</li>
                            <li>With the types of products I create and the projects I work on</li>
                            <li>And leave every problem space better off than it was before</li>
                        </ul>
                    </DesignPhilo.Philo>
                </DesignPhilo.Group>
           </DesignPhilo>
       </DesignPhilo.Container>
   )
}
