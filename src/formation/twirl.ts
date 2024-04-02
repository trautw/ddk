import { Construct, Formation, FormationProps } from "../base/scd";

export interface TwirlProps extends FormationProps {
  participants: string,
  ending: string, // DIAG, ..
}
  
export const TwirlPropsDefault : TwirlProps = {
    strathspeyUrl: 'unknownUrl',
    participants: '1C',
    ending: 'to own side',
    showCribs: function (): string[] {
      return [this.participants, 'twirl', this.ending];
    }
}

export class Twirl extends Formation {
  constructor(scope: Construct, id: string, props: TwirlProps) {
    super(scope, id, props);
  }
}