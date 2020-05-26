class Trashcan{
    constructor(x,y){
        // console.log("insidethecontructor");
        this.trashcanWidth = 200;
        this.trashcanHeight = 100;
        this.wallThickness = 20;
        this.angle = 0;
        this.bottombody = Bodies.rectangle(x,y,this.trashcanWidth,this.wallThickness,{'isStatic':true })
        this.leftbody = Bodies.rectangle(x-this.trashcanWidth/2,y-this.trashcanHeight/2,this.wallThickness,this.trashcanHeight,{'isStatic':true});
        Matter.Body.setAngle(this.leftbody,this.angle);
        this.rightbody = Bodies.rectangle(x+this.trashcanWidth/2,y-this.trashcanHeight/2,this.wallThickness,this.trashcanHeight,{'isStatic':true});
        Matter.Body.setAngle(this.rightbody,this.angle);
        World.add(world, this.bottombody);
        World.add(world,this.leftbody);
        World.add(world, this.rightbody);
        
    }
    display(){
        // console.log("insidedisplay");
        var posBottom=this.bottombody.position;
        var posLeft=this.leftbody.position; 
        var posRight=this.rightbody.position;
        push();
        translate(posLeft.x, posLeft.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(90,129,158);
        stroke(255);
        rotate(this.angle);
        rect(0,0,this.wallThickness,this.trashcanHeight);
        pop();
        push();
        translate(posRight.x, posRight.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(90,129,158)
        stroke(255)
        rotate(this.angle);
        rect(0,0,this.wallThickness,this.trashcanHeight);
        pop();
        push();
        translate(posBottom.x, posBottom.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(90,129,158);
        stroke(255)
        rect(0,0,this.trashcanWidth,this.wallThickness);
        pop();
    }
}