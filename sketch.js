
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

var ground;
var b1,b2,b3,b4;
var top_wall,right_wall,left_wall;
var ball,rock;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  
  var ground_options ={
    isStatic: true
  };
 
  var ball_options = {
    //write a code to set value of restitution such that:
//Ball (white circle) bounces more when it hits the bottom.
restitution : 1,
airFriction : 0.02
  }

  var rock_options = {
   // write a code to set value of restitution such that:
   // Rock (Red Circle) bounces less when it hits the bottom.
   restitution : 0.2,
airFriction : 0.02,
density: 0.04,
  }
   
  btn2 = createImg('up.png');
  btn2.position(325,20);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rock = Bodies.circle(250,10,20,rock_options);
  World.add(world,rock);

  ground= Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world, ground);
  
  right_wall = Bodies.rectangle(395,200,20,450,ground_options);
  World.add(world,right_wall);
  
  left_wall = Bodies.rectangle(5,200,20,450,ground_options);
  World.add(world,left_wall);

  top_wall = Bodies.rectangle(200,5,450,20,ground_options)
  World.add(world,top_wall);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
rect(ground.position.x,ground.position.y,400,20);
ellipse(ball.position.x,ball.position.y,20);
rect(right_wall.position.x,right_wall.position.y,20,450);
rect(left_wall.position.x,left_wall.position.y,20,450);
//rect(top_wall.position.x,top_wall,position.y,450,20);
rect(top_wall.position.x,top_wall.position.y,450,20);
push();
fill("brown");
ellipse(rock.position.x,rock.position.y,20);
pop();






}

function vForce()
{
 //write a code to move ball up when the button is clicked.
 Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.04})
 Body.applyForce(rock,{x:0,y:0},{x:0,y:-0.08})

}


  


