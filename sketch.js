const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;
var bg;
var bubble

function preload() {
  bg = loadImage("assets/background.jpg")
  bubble = loadImage("assets/bubble.png")
}
function setup() {
  var canvas = createCanvas(700, 700);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  

  button.mousePressed(blow);

  //buttonPressed(blow);
  
  //button = mousePressed(blow);
  
  //button.mousePressed();

}

function draw() {
  background(bg);
  Engine.update(engine);

  blower.show();
  ball.show();
  blowerMouth.show();
  spawnbubbles();
 
  drawSprites()
  // if(collide(Ball.body,bubble.body)==true)
 // {
  //  bubble.destroy()
   // console.log(Collided)
 // }
}

function blow() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.05});

  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
  
  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.05, y:0.05});
  
  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:-0.05, y:0});

}

function spawnbubbles() { 
  if (frameCount % 100 === 0){
    var Bubble = createSprite(430,90,5,5)
    Bubble.addImage(bubble)
    Bubble.scale= 0.19
    Bubble.velocityY=-1
}
}
function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,Bubble);
               
               return true; 
            }
            else{
              return false;
            }
         }
}
