import { Construct, Formation, FormationProps } from "../base/scd";


export interface SetProps extends FormationProps {
    participants: string
}
  
export const SetPropsDefault : SetProps = {
    strathspeyUrl: 'unknownUrl',
    participants: 'all',
    showCribs: function (): string[] {
      return [ this.participants, 'set'];
    }
}
  
export class ScdSet extends Formation {
    constructor(scope: Construct, id: string, props: SetProps) {
      super(scope, id, props);
    }
}
  