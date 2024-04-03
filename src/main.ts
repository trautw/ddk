// import * as diagramm from './diagramm/script'
import * as svg from './diagramm/svg'


import * as Dance from './dance/amorninginmarch';
const dance = new Dance.AMorningInMarch(this,"AMorningInMarchSCD",{});

// import * as Dance from './dance/mairiswedding';
// const dance = new Dance.MairisWedding(this,"MairisWeddingSCD",{});


dance.showCribs();

// const diag = new diagramm.diagramm();
const diag = new svg.diagramm();
diag.draw();



console.log("Bye.");

// export { Formation, FormationProps };
/*
app.showDiagrams();
app.showDifficultParts();
app.listFigures();
app.evaluateDifficulty();
app.evaluateFlow();
app.playMusic();
*/