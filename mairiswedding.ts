// # https://my.strathspey.org/dd/dance/4102/
// import { ExampleOpts } from './types'
// import { ExampleOptsDefault } from './config'
// import merge from 'merge'

export interface FormationProps {
  strathspeyUrl: string,
}

export class Formation {
  constructor(scope: Construct, id: string, props: FormationProps) {
  }
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
}

export class Reel extends Formation {
  constructor(scope: Construct, id: string, props: ReelProps) {
    super(scope, id, props);
    const bars = 8;
    if (props.duration == 'HALF') {
      bars = 4;
    }
  }
}

export interface ScdProps {
}

// https://my.strathspey.org/dd/search/dance/
export interface MarisWeddingProps extends ScdProps {
  strathspeyUrl: string;
  danceType: string;
  couples: string;
  shape: string;
}

export class MairisWedding extends Scd {   
  constructor(scope: Construct, id: string, props: MarisWeddingProps) {
    super(scope, id, props);

    const dance = new ThreeInAFourDance(this, 'EC2', {
    });

    const formations = [
      new Turn(this, 'TurnRight', { ...TurnPropsDefault }),
      new Cast(this, 'Cast', { ...CastPropsDefault }),
      new Turn(this, 'TurnLeft', { ...TurnPropsDefault, orientation: "LEFT", duration: 420 }),
      new Reel(this, 'Reel1', { ...ReelPropsDefault, orientation: "DIAG1", duration: "HALF", reelType: "R4" }),
      new Reel(this, 'Reel1', { ...ReelPropsDefault, orientation: "DIAG2", duration: "HALF", reelType: "R4" }),
      new Reel(this, 'Reel2', { ...ReelPropsDefault, orientation: "DIAG1", duration: "HALF", reelType: "R4" }),
      new Reel(this, 'Reel3', { ...ReelPropsDefault, orientation: "DIAG2", duration: "HALF", reelType: "R4" }),
      new Reel(this, 'ReelAcross', { ...ReelPropsDefault, orientation: "ACROSS",duration: "FULL", reelType: "R3" }),
      new HandsRound(this, 'SixHandsRB', { ...HandsRoundPropsDefault, }),
    ];
  }
}

const MairisWeddingProps = {
  // Reel · 40 bars · 3 couples · Longwise - 4   (Progression: 213)
  strathspeyUrl: 'https://my.strathspey.org/dd/dance/4102/',
  danceType: "Reel",
  couples: "3 couples",
  shape: "Longwise 4"
};

const app = new Scd();

new MairisWedding(app, 'MairiesWeddingDance', MairisWeddingProps);

app.showCribs();
app.showDiagrams();
app.showDifficultParts();
app.listFigures();
app.evaluateDifficulty();
app.evaluateFlow();
app.playMusic();
