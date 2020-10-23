var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wall1,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	
	

	packageSprite=createSprite(410,220, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 210, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-8, width,10);
	groundSprite.shapeColor=color(255)
	 
	wall1Sprite=createSprite(500,513,20,150);
	wall1Sprite.shapeColor = ("gray");

	wall2Sprite=createSprite(390,580,200,20);
	wall2Sprite=shapeColor = ("red");

	wall3Sprite=createSprite(300,513,20,150);
    wall3Sprite=shapeColor = ("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(410, 220 , 5 , { packageBody_option,isStatic:true});
	World.add(world, packageBody);
	
	var packageBody_option = {

		restitution: 0.8

	
		}
	

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 190 , {isStatic:true} );
	World.add(world, ground); 
 
	wall1 = Bodies.rectangle(500,515,20,150,{isStatic:true})
	World.add(world,wall1);

	wall2 = Bodies.rectangle(390,580,200,20,{isStatic:true})
	World.add(world,wall2);
	
    wall3 = Bodies.rectangle(300,515,20,150,{isStatic:true})
	World.add(world,wall3);

	Engine.run(engine);
  
}


function draw() {
   background(0,0,100);
 
   Engine.update(engine);
   
 
 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,50,50);
  
  
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) { 
	 Matter.Body.setStatic(packageBody, false); } 
	
	
}