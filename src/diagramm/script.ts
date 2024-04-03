import { Canvas, CanvasRenderingContext2D } from 'canvas';
import * as fs from 'fs';

export class diagramm {

  draw() {
    const canvas = new Canvas(200,200);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    woman(ctx,50,20,2);
    man(ctx,20,20,1);
    scdSet(ctx,20,100);

    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(50, 200);
    ctx.lineTo(200, 100);
    ctx.stroke();

    // Write the image to file
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync("./image.png", buffer);

  };
}
function woman(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, num: number) {
    ctx.fillStyle = 'white';
    ctx.strokeStyle = '#003300';
    ctx.lineWidth = 2;
    ctx.rect(centerX-10, centerY-15, 30, 30);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.font = "20px serif";
    ctx.fillText(num.toString(), centerX, centerY+5);
  }

function man(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, num: number) {
  const radius = 15;

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#003300';
  ctx.stroke();
  ctx.fillStyle = 'black';
  ctx.font = "20px serif";
  ctx.fillText(num.toString(), centerX-5, centerY+5);
}

function scdSet(context: CanvasRenderingContext2D, centerX: number, centerY: number) {
  context.fillStyle = 'black';
  context.font = "70px serif";
  context.fillText('S', centerX, centerY);
}