
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

var engine,world
var boy,boyimg,stone,tree

function preload()
{
	boyimg=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=createSprite(200,610,20,20)
	boy.addImage(boyimg)
	boy.scale=0.1
	stone = new Stone(147,552,35)
	tree = new Tree(600,650,30,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  fill("black")
  textSize(13)
 text(mouseX+", "+mouseY,mouseX,mouseY)
 stone.display()
tree.display()
}



