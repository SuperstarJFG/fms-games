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
}

// happens when back button clicked
function clearGame3(){
    
}