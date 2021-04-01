class Drop{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1,
            density: 0.2           
        }
        this.body = Bodies.circle(x,y,7,options)
        this.radius = 7;
        
        World.add(world, this.body);
    }

    

    display(){
        fill("white");
        //ellipseMode(CENTER);
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        ellipse(0,0,this.radius*2);
        pop();
    }
}