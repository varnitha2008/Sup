class bar{
    constructor(posx,posy,width,height){
        this.body=Bodies.rectangle(posx,posy,width,height,{isStatic:true});
        this.width=width;
        this.height=height;
        World.add(myWorld,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER)
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
         pop();
        //translate(pos.x,pos.y);
    }
}