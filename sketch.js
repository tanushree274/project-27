
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject;
var rope1,rope2,rope3,rope4,rope5;
var world ;
var bobDiameter;
var startbobpositionX,startbobpositionY;

function preload()
{
	
}

function setup() {
	createCanvas(800,400);

	engine = Engine.create();  
	world = engine.world;
    
	bobDiameter=40;
	startbobpositionX=width/2;
	startbobpositionY=height/4+200;

bobObject1=new Bob (startbobpositionX,startbobpositionY,bobDiameter);
bobObject2=new Bob (startbobpositionX-bobDiameter/2,startbobpositionY,bobDiameter);
bobObject3=new Bob (startbobpositionX-bobDiameter,startbobpositionY,bobDiameter);
bobObject4=new Bob (startbobpositionX-bobDiameter*3,startbobpositionY,bobDiameter);
bobObject5=new Bob (startbobpositionX-bobDiameter*4,startbobpositionY,bobDiameter);

roofObject=new Roof (width/2,height/6,width/4,20);



	rope1=new Rope (bobObject1.body,roofObject.body,bobDiameter *2,0);
	rope2=new Rope (bobObject2.body,roofObject.body,bobDiameter *1,0);
	rope3=new Rope (bobObject3.body,roofObject.body,bobDiameter *0,0);
	rope4=new Rope (bobObject4.body,roofObject.body,-bobDiameter *1,0);
   rope5=new Rope (bobObject5.body,roofObject.body,-bobDiameter *2,0);
	

	//Create the Bodies Here.
	
	
	Engine.run(engine);
	

}


function draw() {
  rectMode(CENTER);
  background("pink");

  
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();
roofObject.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  drawSprite();

}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-30,y:-15});
	}
}

