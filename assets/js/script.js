let inter;

function randomNum (min, max){
  return Math.floor(Math.random() * max) + min;
}

function changeSRC(){
  var random = randomNum(1,54);
  document.getElementById("main-card").src="assets/img/"+ random +".jpg";
}

function cardStart() {
   inter = setInterval(changeSRC, 3000);
}

function cardStop() {
  clearInterval(inter);
    inter = null;
}

function cardReload () {
  document.getElementById("main-card").src="assets/img/back.jpg";
  clearInterval(inter);
    inter = null;
}