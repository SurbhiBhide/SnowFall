const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snowflakes = [];
var engine, world;

var Girl1, girl1Image;

var changeBG = 1;

function preload(){

  bg1 = loadImage("snow1.jpg");
  bg2 = loadImage("snow2.jpg");
  bg3 =loadImage("snow3.jpg");
  girl1Image = loadImage("girl1.png");
  girl2Image = loadImage("girl2.png");
  girl3Image = loadImage("girl3.png");
}
 
function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
 
  Girl1 = createSprite(100, 500, 50,50);
  Girl1.addImage(girl1Image);
  Girl1.scale = 0.9;
  
}


function draw() {

  background(bg3); 

  if(frameCount %1300 ===0){
    changeBG = 1;
  }

  if(changeBG === 1){
  background(bg3); 
  Girl1.addImage(girl1Image);
  }
  Engine.update(engine);

  Girl1.x = mouseX;
  //Girl1.y = mouseY;

  if(frameCount % 5 === 0){
    snowflakes.push(new snow1(random(10,1200), -30));
  }

  if(frameCount % 5 === 0){
    snowflakes.push(new snow2(random(10,1200), -30));
  }

  if(frameCount % 5 === 0){
    snowflakes.push(new snow3(random(10,1200), -30));
  }

  if(frameCount % 5 === 0){
    snowflakes.push(new snow4(random(10,1200), -30));
  }

  if(frameCount % 500 === 0){
    changeBG = 2;
  }

  if(changeBG === 2){
    background(bg2); 
    Girl1.addImage(girl3Image);
    }

    if(frameCount % 1000 === 0){
      changeBG = 3;
    }

    if(changeBG === 3){
      background(bg1); 
      Girl1.addImage(girl2Image);
      }

 for (var j = 0; j < snowflakes.length; j++) {
    snowflakes[j].display();
  }

  if(frameCount % 250 === 0){
    snowflakes = [];
  }
 
  drawSprites();

}