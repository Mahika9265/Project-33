var background;
var snowflake;
var snowflake2;
var snowflake3;
var snowflake4;

function preload(){
  background = loadImage("snow1.jpg");
  snowflake = loadImage("snow4.webp");
  snowflake2 = loadImage("snow4.webp");
  snowflake3 = loadImage("snow4.webp");
  snowflake4 = loadImage("snow4.webp");
  }


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
}
  
function draw() {
  background("snow1.jpg");  
  drawSprites();
  snowflake.display();
  snowflake2.display();
  snowflake3.display();
  snowflake4.display();
}