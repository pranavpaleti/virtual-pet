var database;
var hdog,sdog,dog
var foodobject;
var addfood,deductfood;
var foodStockref
function preload(){
hdog=loadImage("Images/happy dog.png");
sdog=loadImage("Images/Dog.png");

}
function setup(){
    createCanvas(900,700)
    dog=createSprite(800,220)
    dog.addImage(sdog)
    dog.scale=0.2
    database=firebase.database()
    foodobject=new Food()
    addfood=createButton("addFood");
    addfood.position(500,450)
    deductfood=createButton("deductFood");
    deductfood.position(650,450)
    foodStockref=database.ref('food')
    foodStockref.on("value",(data)=>{
        foodobject.foodStock=data.val()
    })
}
function draw(){
    background("green")
    foodobject.display();
    addfood.mousePressed(function(){
        foodobject.addFood();
        dog.addImage(hdog);
    })
      deductfood.mousePressed(function(){
          foodobject.deductFood();
          dog.addImage(sdog)
      })  
    
    drawSprites();
}