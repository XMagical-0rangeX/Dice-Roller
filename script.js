//Dice roller

//let inputEl = document.getElementById("dicein");
let btnEl1 = document.getElementById("dicebtn1");
let btnEl2 = document.getElementById("dicebtn2");
let btnEl4 = document.getElementById("dicebtn4");
let btnEl6 = document.getElementById("dicebtn6");
let btnEl8 = document.getElementById("dicebtn8");
let btnEl10 = document.getElementById("dicebtn10");
let btnEl12 = document.getElementById("dicebtn12");
let btnEl20 = document.getElementById("dicebtn20");
let btnEl50 = document.getElementById("dicebtn50");
let btnEl100 = document.getElementById("dicebtn100");
let btnEl1000 = document.getElementById("dicebtn1000");
let spanEl = document.getElementById("rollout");
let inEl = document.getElementById("rolin");
let cusEl = document.getElementById("custom");

let eig = 0.125;
let twe = 0.0833;


btnEl1.addEventListener("click", dictribute);
btnEl2.addEventListener("click", dictribute2);
btnEl4.addEventListener("click", dictribute3);
btnEl6.addEventListener("click", dictribute4);
btnEl8.addEventListener("click", dictribute5);
btnEl10.addEventListener("click", dictribute6);
btnEl12.addEventListener("click", dictribute7);
btnEl20.addEventListener("click", dictribute8);
btnEl50.addEventListener("click", dictribute9);
btnEl100.addEventListener("click", dictribute10);
btnEl1000.addEventListener("click", dictribute11);
cusEl.addEventListener("click", check);
inEl.addEventListener("input", bad);

let dicenum = 0;
let rollnum = 0;

function dictribute(){
  rollnum =1;
 spanEl.innerHTML = rollnum;
}
function dictribute2(){
    let randnum = Math.random();
    if (randnum >.5) {
        rollnum = 2;
    } else {
        rollnum = 1;
    }
   spanEl.innerHTML = rollnum;
  }
function dictribute3(){
    let randnum = Math.random();
    if (randnum >=.75) {
        rollnum = 4;
    } else if (randnum >=.50){
        rollnum = 3;
    } else if (randnum >=.25){
        rollnum = 2;
    } else {
        rollnum = 1;
    }
   spanEl.innerHTML = rollnum;
  }
function dictribute4(){
    let randnum = Math.random();
    if (randnum >=.8333) {
        rollnum = 6;
    } else if (randnum >=.6666){
        rollnum = 5;
    } else if (randnum >=.5){
        rollnum = 4;
    } else if (randnum >=.3333){
        rollnum = 3;
    } else if (randnum >=.166){
        rollnum = 2;
    } else {
        rollnum = 1;
    }
   spanEl.innerHTML = rollnum;
}
function dictribute5(){
    let randnum = Math.random();
    if (randnum >=eig*7) {
        rollnum = 8;
    } else if (randnum >=eig*6){
        rollnum = 7;
    } else if (randnum >=eig*5){
        rollnum = 6;
    } else if (randnum >=eig*4){
        rollnum = 5;
    } else if (randnum >=eig*3){
        rollnum = 4;
    } else if (randnum >=eig*2){
        rollnum = 3;
    } else if (randnum >=eig){
        rollnum = 2; 
    }else {
        rollnum = 1;
    }
   spanEl.innerHTML = rollnum;
}
function dictribute6(){
    let randnum = Math.random();
    if (randnum >=0.9) {
        rollnum = 10;
    } else if (randnum >=0.8){
        rollnum = 9;
    } else if (randnum >=0.7){
        rollnum = 8;
    } else if (randnum >=0.6){
        rollnum = 7;
    } else if (randnum >=0.5){
        rollnum = 6;
    } else if (randnum >=0.4){
        rollnum = 5;
    } else if (randnum >=0.3){
        rollnum = 4; 
    } else if (randnum >=0.2){
        rollnum = 3;
    } else if (randnum >=0.1){
        rollnum = 2; 
    } else {
        rollnum = 1;
    }
   spanEl.innerHTML = rollnum;
}
function dictribute7(){
    let randnum = Math.random();
    if (randnum >=twe*11) {
        rollnum = 12;
    } else if (randnum >=twe*10){
        rollnum = 11;
    } else if (randnum >=twe*9){
        rollnum = 10;
    } else if (randnum >=twe*8){
        rollnum = 9;
    } else if (randnum >=twe*7){
        rollnum = 8;
    } else if (randnum >=twe*6){
        rollnum = 7;
    } else if (randnum >=twe*5){
        rollnum = 6; 
    } else if (randnum >=twe*4){
        rollnum = 5;
    } else if (randnum >=twe*3){
        rollnum = 4; 
    } else if (randnum >=twe*2){
        rollnum = 3;
    } else if (randnum >=twe){
        rollnum = 2; 
    } else {
        rollnum = 1;
    }
   spanEl.innerHTML = rollnum;
}
function dictribute8(){
    /*let randnum = Math.random();
    for(let n = 1; n <= 20; n++){
        if (randnum >= (1/20)*n){
        rollnum = n;
        }
    }
    console.log("cheese")*/
    rollnum = Math.floor(Math.random()*20)+1;
   spanEl.innerHTML = rollnum;
  }
  function dictribute9(){
    
    rollnum = Math.floor(Math.random()*50)+1;
   spanEl.innerHTML = rollnum;
  }
  function dictribute10(){

    rollnum = Math.floor(Math.random()*100)+1;
   spanEl.innerHTML = rollnum;
  }
  function dictribute11(){
 
    rollnum = Math.floor(Math.random()*1000)+1;
   spanEl.innerHTML = rollnum;
  }
  function check(){
      let n = +inEl.value;
      rollnum = Math.floor(Math.random()*n)+1;
   spanEl.innerHTML = rollnum;
  }
  function bad(){
      let inval = +inEl.value;
      if (inval <1){
        inEl.value =1;
      }
  }