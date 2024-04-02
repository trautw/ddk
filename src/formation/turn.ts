import { Construct, Formation, FormationProps } from "../base/scd";

export interface TurnProps extends FormationProps {
    participants: string,
    orientation: string,
    duration: number,
  }
  
  // Defaults
  export const TurnPropsDefault : TurnProps = {
    strathspeyUrl: 'unknownUrl',
    participants: "all",
    orientation: 'RIGHT',
    duration: 360,
    showCribs: function (): string[] {
      let result: string[] = [];
      result.push(this.participants);
      result.push('turn');
      if (this.orientation == "LEFT") { result.push('left');};
      if (this.orientation == "right") { result.push('right');};
      if (this.duration == 180) {
         result.push('half way');
      } else {
        if (this.duration != 360) { result.push(''+this.duration/360 + ' times'); };
      }
    return result;
    }
  }
  
  
  export class Turn extends Formation {
    constructor(scope: Construct, id: string, props: TurnProps) {
      super(scope, id, props);
      const bars = 2;
    }
  }