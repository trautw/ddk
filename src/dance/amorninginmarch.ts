import { Loop, LoopPropsDefault, Petronella, PetronellaPropsDefault, Poussette, PoussettePropsDefault, Reel, ReelPropsDefault, ScdSet, SetPropsDefault, Turn, TurnPropsDefault, Twirl, TwirlPropsDefault } from '../formation/all'
import { ThreeInAFourDance } from '../base/progression'
import { Construct, Scd } from '../base/scd';

export interface AMorningInMarchProps {}

export class AMorningInMarch extends Scd {   
    constructor(scope: Construct, id: string, props: AMorningInMarchProps) {
      super(scope, id, {
        ...props,
        name: "A Morning in March",
        strathspeyUrl: 'https://my.strathspey.org/dd/dance/unknown/',
        danceCharacter: 'Reel · 32 bars · 3 couples · Longwise - 4   (Progression: 213)',
        danceType: "Reel",
        couples: "3 couples",
        shape: "Longwise 4",
        danceProgression: new ThreeInAFourDance(scope,"ThreeInFour", {
          formations: [
            new ScdSet(scope, 'Set1', { ...SetPropsDefault, participants: '1M and 2L'}),
            new ScdSet(scope, 'Set2', { ...SetPropsDefault, participants: '1L and 2M'}),
            new Loop(scope, 'Loop', { ...LoopPropsDefault}),
            new Poussette(scope, 'Poussette', { ...PoussettePropsDefault, duration: "half", modifier: "hello-goodbye"}),
            new Reel(scope, 'Reel1', { ...ReelPropsDefault, orientation: "DIAG2", duration: "HALF", reelType: "R4" }),
            new ScdSet(scope, 'Set2', { ...SetPropsDefault, participants: "1c+2c"}),
            new Petronella(scope, 'Petronella', { ...PetronellaPropsDefault, participants: "1L+2M"}),
            new Turn(scope, 'Turn', { ...TurnPropsDefault, participants: "1M+2L" ,duration: 180}),
            new Twirl(scope, 'Twirl', { ...TwirlPropsDefault, participants: '1M+2L'}),
            new Reel(scope, 'Reel2', { ...ReelPropsDefault, reelType: "R3", start: '(1L in/up, 1M out/up)' }),
          ]
        }
        )
      });
  
    }
  }