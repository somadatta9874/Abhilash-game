class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  gamer=createSprite(1040,85,30,30)
  gamer.addImage(gamer1);
  gamer.rotation = 360
  gamer.rotateToDirection=true;
       gamer.scale=0.5
       pool=createSprite(displayWidth/2,displayHeight-200,displayWidth-300,50)
       pool.visible=false

    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
       
    
      if(allPlayers !== undefined){
        //background(bg);
       image(bg, 0,0,displayWidth, displayHeight );
        jump();
        if(gamer.isTouching(pool)){
          gamer.setVelocity(0,0)
        }
        fowardFlip()
        //var display_position = 100;
        
        //index of the array
         
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      if(gameState==1){
       score =0;

      }
   
  
       
     
      drawSprites();
    }
   
    end(){
      console.log("Score 1");
      score=1;
      
    }
    
  }
  
  function jump(){
if(keyCode==32){gamer.velocityX=2
gamer.velocityY=6
 
}

  }
  function fowardFlip(){
           if(keyDown(UP_ARROW)){ gamer.velocityX = 5;
             gamer.rotation=gamer.rotation+5;
              }  
  }