class CBall {
    constructor(x, y) {
      var options = {
        isStatic: true,
        density:1,
        friction:1
      };
      this.ballImage = loadImage("assets/cannonball.png");
      this.radius= 40;
      
      this.body = Bodies.circle(x, y, this.radius, options);
      World.add(world, this.body);
      this.path=[];
      this.animation=[this.ballImage]
      this.isSink=false;
      this.speed=0.05
    }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      var index=floor(this.speed%this.animation.length)
      //console.log("x:"+pos.x+",y:"+pos.y)
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.animation[index], 0, 0, this.radius,this.radius);
      pop();
      if(this.body.position.x>=180 && this.body.position.x<=1000){
        this.path.push([this.body.position.x,this.body.position.y]);
      }
      for(var i=0; i<this.path.length; i++){
        image(this.ballImage,this.path[i][0],this.path[i][1],5,5)
      }
    }
    shoot(){
      var velocity=p5.Vector.fromAngle(cannon.angle);
      velocity.mult(20);
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
    }
    removeBall(index) {
      this.animation = waterSplash;
      this.speed = 0.05;
      this.r = 150;
      this.isSink = true;
      console.log(this.animation)
      Matter.Body.setVelocity(this.body, {
          x: 0,
          y: 0
      });
      setTimeout(() => {
          Matter.World.remove(world, this.body);
          balls.splice(index, 1);
      }, 1000);
  }
  animate(){
    this.speed=this.speed+0.05
  }
  }