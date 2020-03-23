class Mercury
{
  constructor(x,y,width,height)
  {
  var options = 
  {
    isStatic : true
  }

  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  this.image = loadImage("sprites/MERCURY.png");

  World.add(world,this.body);
  }

  display()
  {
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,60,40);
  }
}