class umbrella{
    constructor(x, y, r){
        var options ={
            'restitution':0,
            'density':0.1,
            'friction':0.1
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        this.walking = loadAnimation("walking_8.png", "walking_7.png", "walking_6.png", "walking_5.png", "walking_4.png", "walking_3.png", "walking_2.png", "walking_1.png");
        World.add(world, this.body);        
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        noStroke();
        image (this.walking, 0, 0, this.r, this.r);
        pop();
    }
}