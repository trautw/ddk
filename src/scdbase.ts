
export type Construct = any;


export interface FormationProps {
    showCribs(): string;
    strathspeyUrl: string,
  }
  
  export class Formation {
    props: FormationProps;
    constructor(_scope: Construct, _id: string, props: FormationProps) {
      this.props = props;
    }
    showCribs = () => this.props.showCribs();
  }