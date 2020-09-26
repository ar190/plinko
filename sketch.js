var particles = [];
var plinkos = [];
var division = [];
var divisionHeight = [];


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  for(var k=0; i<width; k=k+50){
    division.push(new divisions(k,height-divisionHeight/2,10,divisionHeight));}
    for(var j =40;j<=width;j=j+50)
    {
      plinkos.push(new plinkos(j,75))
    }
    for(var j =15;j<=width-10;j=j+50){
      plinkos.push(new plinkos(j,175));
    }
    
  drawSprites();
}