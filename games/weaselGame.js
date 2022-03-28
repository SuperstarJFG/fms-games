// one-time initial setup
function setupGame3(){
    highScore3=0 // high score for game 3
}

// happens every time game starts
function startGame3(){
    game3 = true
    menu = false
    clearMenu()
    score3=0 // current score for game 3
}

// constant drawing of game when active
function drawGame3() {
    background('green')
    textSize(40)
    textFont()
    fill('white')
    text("Pop the Weasel",200,50)
    textSize(20)
    text('Score: '+score3+', High Score: '+highScore3,200,75)
    fill('orange')
    rect(90,230,600,320)
    fill('black')
    circle(150,290,70)
    circle(330,290,70)
    circle(480,290,70)
    circle(620,290,70)
    circle(230,390,70)
    circle(400,390,70)
    circle(560,390,70)
    circle(150,490,70)
    circle(330,490,70)
    circle(480,490,70)
    circle(620,490,70)
}
function draw{
    if(mouseIsPressed){
        fill('white')
        circle(mouseX,mouseY,70)
    }
    else{
        fill('black')
    }
 }
// happens when back button clicked
function clearGame3(){
}
<<<<<<< Updated upstream
function weaselbox(){
    fill('orange')
    rect(50,120,300,220)
    fill('black')
    circle(100,150,50)
    circle(85,225,50)
    circle(100,300,50)
    circle(180,150,50)
    circle(165,225,50)
    circle(180,300,50)
    circle(160,150,50)
    circle(245,225,50)
    circle(315,225,50)
    circle(260,300,50)
}
=======
>>>>>>> Stashed changes
