class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.x=x;
      this.y=y;
      this.width = 200;
      this.height = 213;
      this.bin = loadImage("dustbingreen.png");
      this.body = Bodies.rectangle(x,y,200,213,options);
      World.add(world, this.body);
    }
    
    display(){
      var binpos = this.body.position;
      push();
      translate(binpos.x, binpos.y);
      rectMode(CENTER);
      fill("white");
      imageMode(CENTER);
      image(this.bin, 0,0,this.width, this.height);
      pop();
    }
  };