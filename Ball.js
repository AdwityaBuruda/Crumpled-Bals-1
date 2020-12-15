class Ball {
    constructor(x,y) {
      var options = {
          restitution : 0.4,
          density : 1
      }
      this.body = Bodies.circle(x,y,15,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("purple");
      circle(pos.x, pos.y, 30);
    }
  };
