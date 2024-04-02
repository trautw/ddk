import { Construct, Formation, FormationProps } from "../base/scd";

export interface LoopProps extends FormationProps {
    orientation: string, // DIAG, ..
    participants: string,
  }
  
  // Defaults
  export const LoopPropsDefault : LoopProps = {
    strathspeyUrl: 'unknownUrl',
    orientation: "around partner",
    participants: '1C',
    showCribs: function (): string[] {
      return [this.participants, 'loop', this.orientation];
    }
  }
  
  export class Loop extends Formation {
    constructor(scope: Construct, id: string, props: LoopProps) {
      super(scope, id, props);
    }
  }