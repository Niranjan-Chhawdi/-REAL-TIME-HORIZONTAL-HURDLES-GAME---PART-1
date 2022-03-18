var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var h1,h2,h3,h4;

function preload(){
  track = loadImage("images/track6.png");
  bg = loadImage("images/back.jpg");
  pl1 = loadAnimation("images/A1.png","images/A2.png","images/A3.png");
  pl2 = loadAnimation("images/o1.png","images/o2.png","images/o3.png");
  pl3 = loadAnimation("images/p1.png","images/p2.png","images/p3.png");
  pl4 = loadAnimation("images/1one.png","images/2two.png","images/3three.png");
  hurdle = loadImage("images/hurdle.png");
}

function setup(){
  canvas = createCanvas(windowWidth , windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background(bg);

  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play(); 
  }

  if(gameState === 2){
    game.end();
  }
  
}
