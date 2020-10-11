class Drops{
    constructor(x, y, r){
        var options ={
            'restitution':0,
            'density':0.1,
            'friction':0.1
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("raindrops.png");
        World.add(world, this.body);
    }
    update(){
      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body.position, {x:random(0, 400), y:random(0, 400)});
      }  
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("purple");
        image (this.image, 50, 500, this.r, this.r);
        pop();
    }  
}