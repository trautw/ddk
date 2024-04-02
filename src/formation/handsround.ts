import { Construct, Formation, FormationProps } from "../base/scd";

export interface HandsRoundProps extends FormationProps {
    persons: string,
    duration: string,
  }
  
  export const HandsRoundPropsDefault : HandsRoundProps = {
    strathspeyUrl: 'https://my.strathspey.org/dd/formation/192/',
    persons: '6P',
    duration: 'FULL',
    showCribs: function (): string[] {
      let hands = "unknown";
      switch(this.persons) {
        case "6P": {
          hands = 'six';
          break;
        }
        case "4P": {
          hands = 'four';
          break;
        }
      }
      return [ hands, 'hands round and back'];
    }
  }
  
  export class HandsRound extends Formation {
    constructor(scope: Construct, id: string, props: HandsRoundProps) {
      super(scope, id, props);
      const bars = 8;
    }
  }
  