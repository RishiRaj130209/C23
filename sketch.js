const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  tower = new Tower(100, 350, 160, 310);
  ground = new Ground(0,height-1,width,5)
  angle = -PI/4
  cannon = new Canon(190,100,100,50,angle)
}

function draw() {
  background(189);
  image(backgroundImg, 600, 250,displayWidth,displayHeight );

  

  Engine.update(engine);
  ground.display();
  

  tower.display();
  cannon.display();
  
 
}







