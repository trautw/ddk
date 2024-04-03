import * as SvgDom from 'svgdom';
import { SVG } from '@svgdotjs/svg.js';

// const window = require('svgdom');
const window = SvgDom.createSVGWindow();
// const SVG = require('svg.js')(window);
// const SVG = new Svg.SVG();
const document = window.document;

export class diagramm {

    draw() {
        this.generateSVGTextLines(10,10,'test', { fontFamily: 'Serif', fontHeight: 10});
    }

 generateSVGTextLines(width: number, height: any, lineList: string | any[], tAsset: { fontFamily: any; fontHeight: any; }) {
  // var draw = SVG(document.documentElement).size(width, height);
  var draw = SVG(document.documentElement);
  draw.clear();

  draw.text(function (add: { tspan: (arg0: any) => { (): any; new(): any; attr: { (arg0: string, arg1: string): { (): any; new(): any; newLine: { (): void; new(): any; }; }; new(): any; }; }; }) {
    if (lineList) {
        for (var i = 0; i < lineList.length; i++) {
            add.tspan(lineList[i].text).attr("x", "50%").newLine();
        }
    }
  }).font({
    family: tAsset.fontFamily,
    size: tAsset.fontHeight,
    leading: '1.2em',
    anchor: "middle"
   }).move(width / 2, 0);
console.log(draw.svg());
   return draw.svg();
}
}