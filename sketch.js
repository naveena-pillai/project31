const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,800,20);

  for(var k = 0; k<=innerWidth; k = k+ 80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40; j <=width; j = j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j <=width; j = j+50){
    plinkos.push(new Plinko(j,175));
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display();
  
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for(var k = 0; k<divisions.length;k++){
    divisions[k].display();
  }
  particles.display();
  drawSprites();
}