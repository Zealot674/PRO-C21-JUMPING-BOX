var canvas;
var music;
var redbox;
var bluebox;
var greenbox;
var yellowbox;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    redbox = createSprite(0,580,360,30);
    redbox.shapeColor = rgb(255,0,0);

    bluebox = createSprite(295,580,200,30);
    bluebox.shapeColor = rgb(0,0,255);

    greenbox = createSprite(515,580,200,30);
    greenbox.shapeColor = rgb(0,255,0);

    yellowbox = createSprite(740,580,220,30);
    yellowbox.shapeColor = rgb (255,255,0);

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
 
    if(redbox.isTouching(ball) && ball.bounceOff(redbox)){
        ball.shapeColor = rgb(255,0,0);
        music.play();
    }

    if(bluebox.isTouching(ball)){
        ball.shapeColor = rgb(0,0,255);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(greenbox.isTouching(ball) && ball.bounceOff(greenbox)){
        ball.shapeColor = rgb(0,255,0);
    }

    if(yellowbox.isTouching(ball) && ball.bounceOff(yellowbox)){
        ball.shapeColor = rgb(255,255,0);
    }

    drawSprites();
}