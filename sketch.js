const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var btR,btU

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var bProp = {
    restitution:0.5
  }
  ball = Bodies.circle(30,30,20,bProp)
  World.add(world,ball);
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 //create right button
btR = createImg("right.png");
btR.position(220,30);
btR.size(50,50);
btR.mouseClicked(rForce);
btU = createImg("up.png")
btU.position(20,30)
btU.size(50,50)
btU.mouseClicked(uForce)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function rForce(){
//body , postion , how much force
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function uForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}



function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20,20)
  Engine.update(engine);
}

