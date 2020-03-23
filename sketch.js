const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup()
{
  createCanvas(1350,400)
  engine = Engine.create();
  world = engine.world;

  mercury = new Mercury(500,200,20);
  venus = new Venus(700,300,20);
  earth = new Earth(370,250,20);
  mars = new Mars(300,330,20);
  jupiter = new Jupiter(1000,200,20);
  saturn = new Saturn(1090,100,20);
  uranus = new Uranus(1250,320,20);
  neptune = new Neptune(70,320,20);
  sun = new Sun(600,200,40);
}

function draw()
{
  background("black");
  Engine.update(engine);

  mercury.display();
  venus.display();
  earth.display();
  mars.display();
  jupiter.display();
  saturn.display();
  uranus.display();
  neptune.display();
  sun.display();

}