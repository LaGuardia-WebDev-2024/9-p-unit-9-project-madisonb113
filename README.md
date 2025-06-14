INDEX. HTML
<!-- Unit 9 Project
Requirements
[  ] Add if() statement
[  ] Add random(.., ..)
[  ] Add Custom Function
[  ] Three new HTML elements/CSS Declarations

Select ONE Additional 
[ no ] Feature 1 - Include mouseX and mouseY
[ no ] Feature 2 - Include KeyPressed feature
[ no ] Feature 3 - Include Animation 
[ no ] Feature 4 - Include Logical Operators && or || 
-->


<!DOCTYPE html>
<html>
  <head>
    <title>Choose Your Adventure</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.2/p5.js"></script>
    <style>
    body {
    background-color: #f0f8ff;
    font-family: 'Georgia', serif;
    margin:0;
    text-align: center;
      }
      h1 {
        color: #4a4e69;
        margin-top: 20px;
      }
      canvas {
        border: 4px solid #4a4e69;
          margin-top: 10px;
      }
    </style>
  </head>
  <body>
    <h1>
      Choose Your Adventure</h1>
    <script src = "myP5Code1.js"></script>
  </body>
</html>

myP5Code1.js




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

