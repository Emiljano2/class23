const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

//myEngine, myWorld
var myEngine,myWorld;

var ball,ground;

function setup() {
    createCanvas(400,400);

    //2)create own engine
    myEngine=Engine.create();
    myWorld=myEngine.world;

    //JSON - Key value pair
    groundOptions={
        isStatic: true
    }
   //4)creating PE body
   ground=Bodies.rectangle(200,370,400,20,groundOptions)
   World.add(myWorld,ground);
   console.log(ground)

ballOptions={
    restitution: 1
}


ball=Bodies.circle(100,10,20,ballOptions)
   World.add(myWorld,ball);

   
}

function draw(){

    background("black");
    //3)update engine
    Engine.update(myEngine);

    //5)draw shape
    fill("red");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    fill('blue')
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20)
}

