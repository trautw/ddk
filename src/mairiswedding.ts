// # https://my.strathspey.org/dd/dance/4102/
// import { ExampleOpts } from './types'
// import { ExampleOptsDefault } from './config'
// import merge from 'merge'

export interface FormationProps {
  showCribs(): string;
  strathspeyUrl: string,
}

type Construct = any;
export class Formation {
  props: FormationProps;
  constructor(_scope: Construct, _id: string, props: FormationProps) {
    this.props = props;
  }
  showCribs = () => this.props.showCribs();
}

export interface HandsRoundProps extends FormationProps {
  persons: string,
  duration: string,
}

// Defaults
export const HandsRoundPropsDefault : HandsRoundProps = {
  strathspeyUrl: 'https://my.strathspey.org/dd/formation/192/',
  persons: '6P',
  duration: 'FULL',
  showCribs: function (): string {
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
    return hands + ' hands round and back';
  }
}

export class HandsRound extends Formation {
  constructor(scope: Construct, id: string, props: HandsRoundProps) {
    super(scope, id, props);
    const bars = 8;
  }
}

export interface CastProps extends FormationProps {
}

// Defaults
export const CastPropsDefault : CastProps = {
  strathspeyUrl: 'unknownUrl',
  showCribs: function (): string {
    return 'Cast one place';
  }
}


export class Cast extends Formation {
  constructor(scope: Construct, id: string, props: CastProps) {
    super(scope, id, props);
    const bars = 2;
  }
}

export interface TurnProps extends FormationProps {
  orientation: string,
  duration: number,
}

// Defaults
export const TurnPropsDefault : TurnProps = {
  strathspeyUrl: 'unknownUrl',
  orientation: 'RIGHT',
  duration: 360,
  showCribs: function (): string {
    let orient = 'right';
    if (this.orientation == "LEFT") { orient = 'left'};
    let rounds = '';
    if (this.duration != 360) { rounds = ' '+this.duration/360; };
    if (this.duration == 180) { rounds = ' half'; };
    return 'Turn '+orient + rounds;
  }
}


export class Turn extends Formation {
  constructor(scope: Construct, id: string, props: TurnProps) {
    super(scope, id, props);
    const bars = 2;
  }
}

export interface ReelProps extends FormationProps {
  orientation: string, // DIAG, ..
  duration: string, // HALF, FULL
  reelType: string, // R3, R4
}

// Defaults
export const ReelPropsDefault : ReelProps = {
  strathspeyUrl: 'unknownUrl',
  orientation: "PARALLEL",
  duration: 'FULL',
  reelType: 'R3',
  showCribs: function (): string {
    let durationString = '';
    if (this.duration == 'HALF') { durationString = 'half '; };
    let reelTypeString = 'three';
    if (this.reelType == 'R4') { reelTypeString = 'four'; };
    let orientationString = 'parallel';
    if (this.orientation == 'ACROSS') { orientationString = 'across the set'; };
    if (this.orientation == 'DIAG1') { orientationString = 'diagonal one'; };
    if (this.orientation == 'DIAG2') { orientationString = 'diagonal two'; };
    if (this.orientation == 'DIAG3') { orientationString = 'diagonal one'; };
    if (this.orientation == 'DIAG4') { orientationString = 'diagonal two'; };

    return durationString + orientationString + ' reel of ' + reelTypeString;
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
    const m = this.props.formations.map((formation) => formation.showCribs());
    console.log(m);
    console.log('From 3in4 done');
  }
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

// https://my.strathspey.org/dd/search/dance/
export interface MarisWeddingProps {}

export class MairisWedding extends Scd {   
  constructor(scope: Construct, id: string, props: MarisWeddingProps) {
    super(scope, id, {
      ...props,
      name: "Mairi's Wedding",
      strathspeyUrl: 'https://my.strathspey.org/dd/dance/4102/',
      danceCharacter: 'Reel · 40 bars · 3 couples · Longwise - 4   (Progression: 213)',
      danceType: "Reel",
      couples: "3 couples",
      shape: "Longwise 4",
      danceProgression: new ThreeInAFourDance(scope,"ThreeInFour", {
        formations: [
          new Turn(scope, 'TurnRight', { ...TurnPropsDefault }),
          new Cast(scope, 'Cast', { ...CastPropsDefault }),
          new Turn(scope, 'TurnLeft', { ...TurnPropsDefault, orientation: "LEFT", duration: 360+90+45 }),
          new Reel(scope, 'Reel1', { ...ReelPropsDefault, orientation: "DIAG1", duration: "HALF", reelType: "R4" }),
          new Reel(scope, 'Reel2', { ...ReelPropsDefault, orientation: "DIAG2", duration: "HALF", reelType: "R4" }),
          new Reel(scope, 'Reel3', { ...ReelPropsDefault, orientation: "DIAG3", duration: "HALF", reelType: "R4" }),
          new Reel(scope, 'Reel4', { ...ReelPropsDefault, orientation: "DIAG4", duration: "HALF", reelType: "R4" }),
          new Reel(scope, 'ReelAcross', { ...ReelPropsDefault, orientation: "ACROSS",duration: "FULL", reelType: "R3" }),
          new HandsRound(scope, 'SixHandsRB', { ...HandsRoundPropsDefault, }),
        ]
      }
      )
    });

  }
}

const mairisWedding = new MairisWedding(this,"MairisWeddingSCD",{});

mairisWedding.showCribs();
/*
app.showDiagrams();
app.showDifficultParts();
app.listFigures();
app.evaluateDifficulty();
app.evaluateFlow();
app.playMusic();
*/