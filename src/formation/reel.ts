import { Construct, Formation, FormationProps } from "../base/scd";

export interface ReelProps extends FormationProps {
    orientation: string, // on the sides, accross ..
    symmetry: string, // parallel, 
    duration: string, // HALF, FULL
    reelType: string, // R3, R4
    start: string, // 1L in/up 1M out/up
  }
  
  // Defaults
  export const ReelPropsDefault : ReelProps = {
    strathspeyUrl: 'unknownUrl',
    symmetry: "parallel",
    orientation: 'on the sides',
    duration: 'FULL',
    reelType: 'R3',
    start: '(1L in/down, 1M in/down)',
    showCribs: function (): string[] {
      let result: string[] = [];
      let durationString = null;
      if (this.duration == 'HALF') { 
        result.push('half');
      }

      let orientationString = this.orientation;
      if (this.orientation == 'ACROSS') { orientationString = 'across the set'; };
      if (this.orientation == 'DIAG1') { orientationString = 'first diagonal'; };
      if (this.orientation == 'DIAG2') { orientationString = 'second diagonal'; };
      if (this.orientation == 'DIAG3') { orientationString = 'third diagonal'; };
      if (this.orientation == 'DIAG4') { orientationString = 'fourth diagonal'; };  

      if (this.reelType == 'R3') { 
        result.push(this.symmetry);
        result.push('reel of three');  
        result.push(orientationString);
        result.push(this.start);
      };
      if (this.reelType == 'R4') { 
        result.push('reel of four'); 
        result.push(orientationString);
      };
  
      return result;
    }
  }
  
  export class Reel extends Formation {
    constructor(scope: Construct, id: string, props: ReelProps) {
      super(scope, id, props);
      let bars = 8;
      if (props.duration == 'HALF') {
        bars = 4;
      }
    }
  }
  
  
  