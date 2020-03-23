class Earth
{
  constructor(x,y,radius)
  {
  var options = 
  {
    isStatic : true
  }

  this.body = Bodies.circle(x,y,radius,options);
  this.radius = radius;
  this.image = loadImage("sprites/EARTH2.png");

  World.add(world,this.body)
  }

  display()
  {
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,60,60);
  }
}