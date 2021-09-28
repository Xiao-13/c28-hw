
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world; 
var groundobj, paperobj; 
var dustbinobj;
var launcherobj;

function setup() {
	 createCanvas(1600, 700); 
	 engine = Engine.create(); 
	 world = engine.world; 
	 paperobj = new Paper(200, 400, 70);
	 groundobj = new Ground(width/2,690,width,20); 
	 dustbinobj = new Dustbin(1200,650); 
	 launcherobj = new Launcher(paperobj.body,{x:200, y:400});
	 
	Engine.run(engine); 

	}
function draw() {
  rectMode(CENTER);
  background(230);
  paperobj.display();
  groundobj.display();
  dustbinobj.display();
  launcherobj.display();
}


function mouseDragged(){
	Matter.Body.setPosition(paperobj.body, {x: mouseX, y: mouseY});
}
	
function mouseReleased(){
	launcherobj.fly();
}
	
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(paperobj.body,{x:200, y:400})
		launcherobj.attach(paperobj.body)
	}
}

