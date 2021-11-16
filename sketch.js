var doraemon, doracake, mouse, background, afraidDoraemon, ground;
var score = 0;

function preload(){
    doraemonImg = loadImage("doraemon.png");
    doracakeImg = loadImage("doracake.png");
    mouseImg = loadImage("mouse.png");
    backgroundImg = loadImage("Background.jpg");
    //afraidDoraemonImg = loadImage("afraiddoraemon");
}

function setup(){
    createCanvas(1200,600);

    background = createSprite(600,300,20,20)
    background.addImage(backgroundImg);
    background.scale = 2.8;
    background.velocityX = -10;

    doraemon = createSprite(50,540,20,20);
    doraemon.addImage(doraemonImg);
    doraemon.scale = 0.1;

    ground = createSprite(600,590,1200,10)
    ground.visible = false;

    /*doracake = createSprite(50,60,150,250);
    doracake.addImage(doracakeImg);
    doracake.scale = 0.*/

    /*mouse = createSprite(100,20,150,300);
    mouse.addImage(mouseImg);*/

}

function draw(){
    background("white");

    if(keyDown("space")){
        doraemon.velocityY = -10;
    }
    
    doraemon.velocityY = doraemon.velocityY+0.8;
    doraemon.collide(ground);

    spawnFoods();
    spawnMouse();

    drawSprites();
}


function spawnFoods(){

    if(frameCount%80===0){
    doracake = createSprite(1200,250,40,10);
    doracake.addImage(doracakeImg);
    doracake.scale = 0.05;
    doracake.velocityX = -12;
    }
}

function spawnMouse(){

    if(frameCount%120===0){
    mouse = createSprite(1200,540,40,10);
    mouse.addImage(mouseImg);
    mouse.scale = 0.05;
    mouse.velocityX = -8;
    }
}