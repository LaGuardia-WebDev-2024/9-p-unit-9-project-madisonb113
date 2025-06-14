let scene =0;
let message ="";
function setup () {
  createCanvas(400,400);
  textAlign(CENTER,CENTER);
  textSize(18);
  
}
function draw() {
  background(220);
  if (scene === 0) {
    startScene();
  }else if (scene === 1) {
    exploreCave();
  } else if (scene === 2) {
    climbMountain();
  } else if (scene ===3) {
    endScene(); 
  }
}
function startScene() {
  background("#b2dfdb");
  fill(0);
  text("You are standing in a forest. \n\nPress A to explore a cave. \nPress B to climb the mountain.", width / 2, height / 2);
}
function exploreCave() {
  background("#c5cae9");
  fill(0);
  text("You enter the cave.\n\nHere you meet 3 bats\n\n" + message + "\n\nPress R to restart.",width / 2, height / 2);
  
}
function climbMountain() {
  background ("#ffe002");
  fill(0);
  text("You start to climb the mountain, you see the beautful sunset\n\n" + message + "\n\nPress R to restart.", width / 2, height / 2);
}
function endScene() {
  background("#f8bbd0");
  fill(0);
  text("Thank you for playing.\n\nPress R to restart your journey.", width / 2, height / 2); 
}
function randomOutcome() {
  let chance = random(1);
  if (chance < 0.5) {
    message = "You have discovered treasure!";
  }else{
    message= "A wild creature made you run away!";
  
  }
  }
function keyPressed() {
  if ( scene === 0) {
    if (key === 'A' || key === 'a') {
      scene = 1;
      randomOutcome();
      
    } else if (key === 'B' || key === 'b') {
               scene = 2;
               randomOutcome();
  }
}else if (key === 'R' || key === 'r') {
  scene = 0;
  message = "";
}
}
