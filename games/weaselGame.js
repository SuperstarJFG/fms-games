// one-time initial setup
function setupGame3(){

}

// happens every time game starts
function startGame3(){
    game3 = true
    menu = false
    clearMenu()
}

// constant drawing of game when active
function drawGame3() {
    background('green')
    textSize(40)
    textFont()
    fill('white')
    text("Pop the Weasel",200,50)
    textSize(20)
    text('Score: 0, High Score: 0',200,75)
}

// happens when back button clicked
function clearGame3(){
    
}