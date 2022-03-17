// one-time initial setup
function setupGame1(){
    highScore1=0 // high score for game 1
}

// happens every time game starts
function startGame1(){
    game1 = true
    menu = false
    clearMenu()
    score1=0 // current score for game 3
}

// constant drawing of game when active
function drawGame1() {
    background('red')
    textSize(40)
    textFont()
    fill('white')
    text("Thread the Needle",200,50)
    textSize(20)
    text('Score: '+score1+', High Score: '+highScore1,200,75)

    // test line
    stroke(126)
    strokeWeight(10)
    line(30, 20, 85, 700)
    strokeWeight(0)
}

// happens when back button clicked
function clearGame1(){
    
}