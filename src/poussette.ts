import { Formation, FormationProps, LoopProps } from "./mairiswedding";
type Construct = any;

export interface PoussetteProps extends FormationProps {
    orientation: string, // DIAG, ..
}
  
// Defaults
export const PoussettePropsDefault : PoussetteProps = {
    strathspeyUrl: 'unknownUrl',
    orientation: "to place",
    showCribs: function (): string {
      return 'Poussette';
    }
}
  
export class Poussette extends Formation {
    constructor(scope: Construct, id: string, props: LoopProps) {
      super(scope, id, props);
    }
}
  