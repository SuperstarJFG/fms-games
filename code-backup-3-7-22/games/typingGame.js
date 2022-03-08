// one-time initial setup
function setupGame2(){

}

// happens every time game starts
function startGame2(){
    game2 = true
    menu = false
    clearMenu()
}

// constant drawing of game when active
function drawGame2() {
    background('blue')
    textSize(40)
    textFont()
    fill('white')
    text("Type the Story",200,50)
    textSize(20)
    text('Score: 0, High Score: 0',200,75)
}

// happens when back button clicked
function clearGame2(){
    
}