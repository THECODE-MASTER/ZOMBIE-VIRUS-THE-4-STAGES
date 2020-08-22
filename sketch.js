var array1=[]
var x=5,Bullet,Shooted=0,create=0,stage=1,killed=0
function setup() {
createCanvas(windowWidth,windowHeight);
Bullet=createGroup();
obstacleg=createGroup();
Gun=createSprite(windowWidth-100,Math.round(random(0,windowHeight)),40,40);
Gun.shapeColor="Pink"
     


}

function draw() {
  background("black");  
  textSize(20);
  if(stage===1){
  if(create===0){
    create=1
    zombie1=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
    properties(zombie1);
    zombie2=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
    properties(zombie2);
    zombie3=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
    properties(zombie3);
    zombie4=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
    properties(zombie4);
    zombie5=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
    properties(zombie5);
    zombie6=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
    properties(zombie6);  
      }
 shoot();
 movegun();
  if(zombie1.isTouching(Bullet)){
    zombie1.destroy();
    console.log(killed);
    killed=killed+1
  } 
  if(zombie2.isTouching(Bullet)){
    zombie2.destroy();
    console.log(killed)
    killed=killed+1
  } 
  if(zombie3.isTouching(Bullet)){
    zombie3.destroy();
    console.log(killed)
    killed=killed+1
  } 
  if(zombie4.isTouching(Bullet)){
    zombie4.destroy();
    console.log(killed)
    killed=killed+1
  } 
  if(zombie5.isTouching(Bullet)){
    zombie5.destroy();
    console.log(killed)
    killed=killed+1
  } 
  if(zombie6.isTouching(Bullet)){
    zombie6.destroy();
    console.log(killed)
    killed=killed+1
  } 
  if(killed>=6){
    stage=stage+1;
    console.log(stage);
    console.log("Stage Won")
    create=0;
    killed=0;
  }
}
  if(stage===2){
    
    
    if(create===0){
      create=1
      zombie7=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
      properties(zombie7);
      zombie8=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
      properties(zombie8);
      zombie9=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
      properties(zombie9);
      zombie10=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
      properties(zombie10);
      zombie11=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
      properties(zombie11);
      zombie12=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
      properties(zombie12);  
      zombie13=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
      properties(zombie13);
      zombie14=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
      properties(zombie14);
      zombie15=createSprite(windowWidth-300,Math.round(random(10,windowHeight-10)),40,40)
      properties(zombie15);      
        }
   shoot();
   movegun();
    if(zombie7.isTouching(Bullet)){
      zombie7.destroy();
      console.log(killed);
      killed=killed+1
    } 
    if(zombie8.isTouching(Bullet)){
      zombie8.destroy();
      console.log(killed)
      killed=killed+1
    } 
    if(zombie9.isTouching(Bullet)){
      zombie9.destroy();
      console.log(killed)
      killed=killed+1
    } 
    if(zombie10.isTouching(Bullet)){
      zombie10.destroy();
      console.log(killed)
      killed=killed+1
    } 
    if(zombie11.isTouching(Bullet)){
      zombie11.destroy();
      console.log(killed)
      killed=killed+1
    } 
    if(zombie12.isTouching(Bullet)){
      zombie12.destroy();
      console.log(killed)
      killed=killed+1
    } 
    if(zombie13.isTouching(Bullet)){
      zombie13.destroy();
      console.log(killed)
      killed=killed+1
    } 
    if(zombie14.isTouching(Bullet)){
      zombie14.destroy();
      console.log(killed)
      killed=killed+1
    } 
    if(zombie15.isTouching(Bullet)){
      zombie15.destroy();
      console.log(killed)
      killed=killed+1
    } 
    if(killed>=9){
      stage=stage+1;
      console.log(stage);
      console.log("Stage Won")
      create=0;
      killed=0;
    }
    
  
    }
    if(stage===3){
      if(World.frameCount%30==0 && create<=30){
        createobstacles();
      }
   movegun();
   if(create>=30){
    stage=stage+1;
    console.log(stage);
    console.log("Stage Won")
    create=0;
    killed=0;
  }
    }
    if(stage===3){
      if(World.frameCount%30==0 && create<=60){
        createobstacles();
      }
   movegun();
   if(create>=60){
    stage=stage+1;
    console.log(stage);
    console.log("Stage Won")
    create=0;
    killed=0;
  }
    }
   if(Shooted===1){
          if(World.frameCount%20==0){
            Shooted=0;
          }
         }  
  if(Shooted===0){
    fill("Green")
    text("Reloaded",displayWidth/2-100,displayWidth/2-300);
    }
    if(Shooted===1){
      fill("Red")
     text("Reloading",displayWidth/2-100,displayWidth/2-300);
      }
  drawSprites();
}


   function shoot(){
      if(keyDown("Space")){
        if(Shooted===0){
        Shooted=1
        bullet=createSprite(Gun.x,Gun.y,40,10)
       bullet.velocityX=-15
        bullet.shapeColor="yellow"
        Bullet.add(bullet);
        }
          }
    }
     
    function movegun(){
      if(keyDown("up")){
        Gun.y=Gun.y-10
       }
       if(keyDown("down")){
         Gun.y=Gun.y+10
        }
        
       }

       function properties(Sprite){
        Sprite.x=(windowWidth-windowWidth+50)
        Sprite.velocityX=1
        Sprite.shapeColor="GREEN"
       }
       function createobstacles(theme){
         obstacle=createSprite(windowWidth-windowWidth+10,random(10,windowHeight-10),50,50)
         obstacle.velocityX=4
         obstacle.shapeColor="RED"
         obstacleg.add(obstacle);
         create=create+1;
       }
      