class Ground{
    
    constructor(x,y,width,height){
        // console.log("Ground Class Constructor Starts");
        var options={
            'isStatic':true
        } 
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        // console.log("Ground Class Constructor Ends");
    }
    display(){
        // console.log("Ground Class display function Starts");
        rectMode(CENTER);
        push();
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
        // console.log("Ground display function Ends");
    }
}