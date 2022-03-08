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
    background('red')
    textSize(40)
    textFont()
    fill('white')
    text("Thread the Needle",200,50)
    textSize(20)
    text('Score: 0, High Score: 0',200,75)
}

// happens when back button clicked
function clearGame1(){
    
}