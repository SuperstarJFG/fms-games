// one-time initial setup
function setupGame2(){
    highScore2=0 // high score for game 2
}

// happens every time game starts
function startGame2(){
    game2 = true
    menu = false
    clearMenu()
    score2=0 // current score for game 3
}

// constant drawing of game when active
function drawGame2() {
    background('blue')
    textSize(40)
    textFont()
    fill('white')
    text("Type the Story",200,50)
    textSize(20)
    text('Score: '+score2+', High Score: '+highScore2,200,75)
}

// happens when back button clicked
function clearGame2(){
    
}