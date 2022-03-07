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
    fill('white')
    text("Game 2 Here",120,50)
}

// happens when back button clicked
function clearGame2(){
    
}