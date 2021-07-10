var database;
var gameState = 0, playerCount = 0;
var form;
var game;
var player;
var allPlayers;
var car1, car2, car3, car4, cars;

function setup(){
  database = firebase.database();
  createCanvas(displayWidth - 20, displayHeight - 30);
  game = new Game ();
  game.getGameState ();
  game.start ();
}
 

function draw(){
  background("white");
 
  if (playerCount == 4){
    game.updateGameState (1);
  }
  
  if(gameState == 1){
   clear ();
   game.play();
   drawSprites();
  }
}