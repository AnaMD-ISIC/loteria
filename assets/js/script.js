/*
OPCION 1: NOP
var cardArray = new Array[53];

for (var i = 0; i<=cardArray.length; i++) {
  cardArray[i] = new Image();
  cardArray[i].src = ('assets/img/baraja/' + i + '.jpg');
}

var mainCard = document.getElementById("main-card");
for (var i = 0; i<=cardArray.length; i++) {
  document.getElementById("main-card").src = cardArray[i].src;
}*/

/*
OPCIÓN 2: MENOS

var images = ["./assets/img/card1.jpg",
"./assets/img/card2.jpg",
"./assets/img/card3.jpg",
"./assets/img/card4.jpg",
"./assets/img/card5.jpg",
"./assets/img/card6.jpg",
"./assets/img/card7.jpg"];
var index = 0;

function makeImage() {
   var img = document.createElement('img')
   img.src = images[index];
   document.getElementById('main-card').appendChild(img);
}

function nextImage(){
   var img = document.getElementById('main-card').getElementsByTagName('img')[0]
   index++;
   index = index % images.length; 
   img.src = images[index];
}*/

/*OPCIÓN 3:*/

var i = Math.round(Math.random()*7);
var cardArray = new Array(54);

cardArray[0] = "./img/card1.jpg";
cardArray[1] = "./img/card2.jpg";
cardArray[2] = "./img/card3.jpg";
cardArray[3] = "./img/card4.jpg";
cardArray[4] = "./img/card5.jpg";
cardArray[5] = "./img/card6.jpg";
cardArray[6] = "./img/card7.jpg";

function cargarImagen(){
  var img = document.getElementById('main-card');
  document.img.src = cardArray[i];
}