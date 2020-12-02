
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var tree;
var ground;
var stone;
var boy_image;
var mango1,mango2,mango3,mango4;
var launcher;
function preload()
{
	boy_image=loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree=new Tree(1100,590,200,200);
ground=new Ground(700,690,1300,20);
stone=new Stone(220,400,100);
mango1=new Mango(1100,510,30);
mango2=new Mango(1150,510,30);
mango3=new Mango(1050,510,30);
mango4=new Mango(1110,530,30)

launcher=new Launcher(stone.body,{x:220,y:400})

	Engine.run(engine);
  
}


function draw() {
  
  background("lightblue");
  image (boy_image,200,450,200,300)
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  
mango2.display();
mango3.display();
mango4.display();
launcher.display();
detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
 
}

function detectCollision(lstone,lmango){
 var mangoBodyPosition= lmango.body.position;
var stoneBodyPosition= lstone.body.position;
var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
{if(distance<=lmango.radius+lstone.radius)
	{
		Matter.Body.setStatic(lmango.body,false);
	}

}}

function keyPressed()
{
	if(keyCode=== 32)
	{
		Matter.Body.setPosition(stone.body,{x:220,y:400})
		launcher.attach(stone.body);
	}
}

function mouseDragged()
{
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
launcher.fly();
}


