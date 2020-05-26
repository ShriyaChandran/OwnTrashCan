class PaperBall{
    constructor(x,y,radius){
        // console.log("PaperBall Class Constructor Starts");
        var options={
            'isStatic':false,
            'restitution':0.3,
            'density':1.2,  
            'friction':0.5  
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        // console.log("PaperBall Class Constructor ENDS");
    }
    display(){
        // console.log("PaperBall Class display Starts");
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        // console.log("PaperBall Class display ends");
    }
}