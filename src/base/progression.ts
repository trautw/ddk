import { Construct, Formation } from "./scd";

export interface DanceProgressionProps {
}

export class DanceProgression {
  constructor(scope: Construct, id: string, props: DanceProgressionProps) {
    // super(scope, id, props);
  }
  showCribs() {
    console.log('From Progresssion');
  }
}

export interface ThreeInAFourDanceProps {
  formations: Formation[]
}

export class ThreeInAFourDance extends DanceProgression {
  props: ThreeInAFourDanceProps;
  constructor(scope: Construct, id: string, props: ThreeInAFourDanceProps) {
    super(scope, id, props);
    this.props = props;
  }
  showCribs() {
    console.log('From 3in4');
    console.log(this.props.formations)
    const m = this.props.formations.map((formation) => formation.showCribs().join(' '));
    console.log(m);
    console.log('From 3in4 done');
  }
}
