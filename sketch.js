
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var dustbinObj,groundObject,Paperball,paperballIMG;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	Paperball=new paperball(200,630,70);
	Paperball.scale=0.3;
	
	

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(230);
 drawSprites();

  groundObject.display();
  dustbinObj.display();
  Paperball.display();
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(Paperball.body,Paperball.body.position,{x:130,y:-1000});
	}
}





















