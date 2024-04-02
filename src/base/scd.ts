import { DanceProgression } from "./progression";

export type Construct = any;


export interface FormationProps {
    showCribs(): string[];
    strathspeyUrl: string,
  }
  
  export class Formation {
    props: FormationProps;
    constructor(_scope: Construct, _id: string, props: FormationProps) {
      this.props = props;
    }
    showCribs = () => this.props.showCribs();
  }

  export interface ScdProps {
    strathspeyUrl: string,
    name: string,
    danceCharacter: string,
    danceType: string,
    couples: string,
    shape: string,
    danceProgression?: DanceProgression
  }
  
  export class Scd {
    showCribs() {
      // throw new Error("Method not implemented.");
      console.log("Hello Scd");
      console.log(this.props.name);
      console.log(this.props.danceCharacter);
      console.log(this.props.danceProgression);
      console.log(this.props.danceProgression?.showCribs());
    }
  
    props: ScdProps;
  
    constructor(_scope: Construct, _id: string, props: ScdProps) {
      this.props = props;
    }
  }
  