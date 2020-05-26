const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var paperBall, trashCan, ground;

function preload(){

}

function setup(){
    // creating a canvas
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    // intiating the paper ball
    paperBall = new PaperBall(150,400,15);
    ground = new Ground(600,785,1200,30);
    trashCan = new Trashcan(1050,760);
}

function draw(){
    // background colour
    background("black");
    Engine.update(engine);
    // displaying the paper ball
    paperBall.display();
    ground.display();   
    trashCan.display();
}

function keyPressed(){
    if(keyCode===32){
        console.log("upArrowispressed");
        Matter.Body.applyForce(paperBall.body,paperBall.body.position,{
            // x:130,
            // y:-100
            x:40,
            y:100        
        });
    }
}