import { Construct, Formation, FormationProps } from "../base/scd";

export interface CastProps extends FormationProps {
}

// Defaults
export const CastPropsDefault : CastProps = {
  strathspeyUrl: 'unknownUrl',
  showCribs: function (): string[] {
    return ['cast one place'];
  }
}

export class Cast extends Formation {
  constructor(scope: Construct, id: string, props: CastProps) {
    super(scope, id, props);
    const bars = 2;
  }
}
