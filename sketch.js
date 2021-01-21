const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var suraj_engine, suraj_world,ground
var box1
function setup() {
  createCanvas (400,400);
  suraj_engine = Engine.create();
  suraj_world = suraj_engine.world
  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);
  ground1 = new Ground (200,390,400,20);
}

function draw() {
  background("black");  
  Engine.update(suraj_engine)
  box1.display();
  box2.display();
  ground1.display();
 
  
}