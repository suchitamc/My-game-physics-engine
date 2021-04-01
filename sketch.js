const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var tophead;

var engine, world;
var bullet, string;
var rand;
var holder=[];

var maxDrops=100;




function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(500,500);


    //creating drops
   /* if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }

    }*/
    tophead = new Stand(250,10,500,30);
    rightend = new Stand(490,250,20,500);
    leftend = new Stand(10,250,20,500);
    ground = new Stand(50,490,100,20);
    
    holder.push(new Stand(200,250,5,5));
    holder.push(new Stand(210,256,5,5));
    holder.push(new Stand(220,262,5,5));
    holder.push(new Stand(230,256,5,5));
    holder.push(new Stand(240,250,5,5));
    bullet = new Drop(50,400);
    string = new Sling(bullet.body,{x:50,y:300});
}

function draw(){
    Engine.update(engine);
    background(0); 

    tophead.display();
    rightend.display();
    leftend.display();
    ground.display();
    

    console.log(bullet);
    
    //displaying rain drops
     for(var i = 0; i<5; i++){
        holder[i].display();   
    }
    bullet.display();
    //drawSprites();
}   


function mouseDragged(){
   // if (gameState!=="launched"){
        Matter.Body.setPosition(bullet.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    string.fly();
   // gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       string.attach(bullet.body);
    }
}