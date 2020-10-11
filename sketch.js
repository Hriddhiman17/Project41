const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body; 

var world, engine;
var batman_umbrella, maxDrops;

function setup(){
   createCanvas(400, 600);

   engine = Engine.create(); 
   world = engine.world; 

   batman_umbrella = new umbrella(200, 400);
   batman_umbrella.scale = 0.5;

   maxDrops = 100;
}

function draw(){
    background(0);
    Engine.run(engine); 
    
    for(var i = 0; i<maxDrops; i++){
        Drops.push(new Drops(random(0, 400), random(0, 400)));
    }
    spawnRain();
    batman_umbrella.display();
}