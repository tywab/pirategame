class Boat {
    constructor(x, y, width, height, boatPos,animation) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.animation=animation;
      this.speed=0.0512
  
      this.boatPosition = boatPos;
      this.image = loadImage("assets/boat.png");
      World.add(world, this.body);
    }
  
  
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      var index=floor(this.speed%this.animation.length);
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.animation[index], 0, this.boatPosition, this.width, this.height);
      noTint();
      pop();
    }
    removeBoat(index){
      this.animation=brAnimation;
      this.width=300
      this.height=300
      setTimeout(()=>{
        World.remove(world,this.body)
        boats.splice(index,1) 
      },2000)
    }
    animateBoat(){
      this.speed=this.speed+0.05;
    }
  }