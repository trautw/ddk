import { Construct, Formation, FormationProps } from "../base/scd";

export interface PetronellaProps extends FormationProps {
    participants: string,
    ending: string,
  }
  
  export const PetronellaPropsDefault : PetronellaProps = {
    strathspeyUrl: 'unknownUrl',
    participants: "1c",
    ending: "own sides",
    showCribs: function (): string[] {
      return [this.participants, 'petronella', 'ending', this.ending];
    }
  }
  
  export class Petronella extends Formation {
    constructor(scope: Construct, id: string, props: PetronellaProps) {
      super(scope, id, props);
    }
  }