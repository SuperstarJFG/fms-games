// one-time initial setup
function setupGame1(){

}

// happens every time game starts
function startGame1(){
    game1 = true
    menu = false
    clearMenu()
}

// constant drawing of game when active
function drawGame1() {
    background('gray')
    textSize(40)
    fill('white')
    text("Game 1 Here",120,50)
}

// happens when back button clicked
function clearGame1(){
    
}