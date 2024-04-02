import { Formation, FormationProps } from "../base/scd";
type Construct = any;

export interface PoussetteProps extends FormationProps {
    orientation: string, // DIAG, ..
    duration: string, // half, 
    modifier: string, // Hello-goodbye
}
  
export const PoussettePropsDefault : PoussetteProps = {
    strathspeyUrl: 'unknownUrl',
    orientation: "to place",
    duration: "",
    modifier: "",
    showCribs: function (): string[] {
      return [ this.duration, this.modifier, 'poussette'];
    }
}
  
export class Poussette extends Formation {
    constructor(scope: Construct, id: string, props: PoussetteProps) {
      super(scope, id, props);
    }
}
