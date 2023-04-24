let inter;
let bar;
let pass;
let count = 1;

function randomNum (min, max) {
  var num = Math.floor(Math.random() * max) + min;
  return num;
}

function changeSRC() {
  var random = randomNum(1,54);
  document.getElementById("main-card").src="assets/img/"+ random +".jpg";
  passCard(random);
  return random;
}

function passCard(random) {
  if (count==1){
    document.getElementById("card-1").src="assets/img/back.jpg";
    count += 1;
  } else {
    var num = random;
    document.getElementById("card-1").src="assets/img/"+ num +".jpg";
    count += 1;
  }
  
}

function cardStart() {
   inter = setInterval(changeSRC, 3000);
   bar = setInterval(progressBar,3000);
}

function cardStop() {
  clearInterval(inter);
  inter = null;

  clearInterval(bar);
  bar = null;
}

function cardReload () {
  document.getElementById("main-card").src="assets/img/back.jpg";
  document.getElementById("card-1").src="assets/img/back.jpg";
  document.getElementById("bar-bar").value = 0;

  clearInterval(inter);
  inter = null;
  clearInterval(bar);
  bar = null;
}

function progressBar(){
  document.getElementById("bar-bar").value += 1;
}