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
    fill('white')
    text("Game 3 Here",120,50)
}

// happens when back button clicked
function clearGame3(){
    
}