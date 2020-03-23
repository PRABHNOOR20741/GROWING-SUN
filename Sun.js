class Sun
{
  constructor(x,y,radius)
  {
  var options = 
  {
    isStatic : true
  }

  this.body = Bodies.circle(x,y,radius,options);
  this.radius = radius;
  this.visiblity = 255;

  World.add(world,this.body)
  }

  display()
  {
   if(this.radius>0)
    {
    var pos = this.body.position;
    this.radius = this.radius + 0.5;
    ellipseMode(RADIUS);
    fill("red");
    ellipse(pos.x,pos.y,this.radius);
    }

    if(this.radius>150)
    {
      fill("orange");
      ellipse(pos.x,pos.y,this.radius);
    }

    
    if(this.radius>300)
    {
      fill("yellow");
      ellipse(pos.x,pos.y,this.radius);
    }

    if(this.radius>450)
    {
      fill("white");
      ellipse(pos.x,pos.y,this.radius);
    }

    if(this.radius>600)
    {
      fill("cyan");
      ellipse(pos.x,pos.y,this.radius);
    }

    if(this.radius>700)
    {
      fill("black");
      this.radius = this.radius;
      ellipse(pos.x,pos.y,this.radius);
    }

  }
}