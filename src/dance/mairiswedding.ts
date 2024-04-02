import { ThreeInAFourDance } from "../base/progression";
import { Construct, Scd } from "../base/scd";
import { Cast, CastPropsDefault, HandsRound, HandsRoundPropsDefault, Reel, ReelPropsDefault, Turn, TurnPropsDefault } from "../formation/all";

// https://my.strathspey.org/dd/dance/4102/
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
          new Turn(scope, 'TurnRight', { ...TurnPropsDefault, participants: '1C' }),
          new Cast(scope, 'Cast', { ...CastPropsDefault }),
          new Turn(scope, 'TurnLeft', { ...TurnPropsDefault, orientation: "LEFT", duration: 360+90+45, participants: '1C' }),
          new Reel(scope, 'Reel1', { ...ReelPropsDefault, orientation: "DIAG1", duration: "HALF", reelType: "R4" }),
          new Reel(scope, 'Reel2', { ...ReelPropsDefault, orientation: "DIAG2", duration: "HALF", reelType: "R4" }),
          new Reel(scope, 'Reel3', { ...ReelPropsDefault, orientation: "DIAG3", duration: "HALF", reelType: "R4" }),
          new Reel(scope, 'Reel4', { ...ReelPropsDefault, orientation: "DIAG4", duration: "HALF", reelType: "R4" }),
          new Reel(scope, 'ReelAcross', { ...ReelPropsDefault, orientation: "ACROSS",duration: "FULL", reelType: "R3", symmetry: 'dotsymmetric', start: 'Lsh to 1cnr' }),
          new HandsRound(scope, 'SixHandsRB', { ...HandsRoundPropsDefault, }),
        ]
      }
      )
    });

  }
}
