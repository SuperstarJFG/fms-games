
let HighScore;
let startButton;
let gameRun = false
let resetLine = false

// happens only once when program starts
function setupGame1(){
    highScore1 = 0 // high score for game 1

    gameButtonLength = 265
    gameButtonHeight = 100

    start1x = 1;
    start2x = 250;
    start1y = 350;
    start2y = 350;

// the code below creates the start button
    startButton = createButton('Start!')
    startButton.position(265, 200)
    startButton.size(gameButtonLength, gameButtonHeight)
    startButton.style('background-color:yellow')
    startButton.mousePressed(clearStartButton)
    startButton.hide();
}


// happens once every time needle game starts
function startGame1(){
    game1 = true
    menu = false
    clearMenu()

    startButton.show()
    score1 = 0
    


}

// happens every frame when needle game active
function drawGame1() {
    background('red')
    textSize(40)
    textFont()
    fill('white')
    text("Thread the Needle",200,50)
    textSize(20)

    text('Score: '+score1+', High Score: '+highScore1,200,75)


    if (gameRun == true)
    {
        drawThread()
        printInstruction()
    }


  

}


function clearStartButton ()
{
    startButton.hide()
    gameRun = true
}

function drawThread () 
{
    stroke(0)
    strokeWeight(7)
    line(start1x, start1y, start2x, start2y)
    strokeWeight(0)
}

function playerControl()
{


    
    start1y = mouseY
}

function printInstruction () 
{
    stroke('white')
    text('Feed the thread through the needle!', 200, 200)
}


// happens when back button clicked
function clearGame1(){
    GameRun = false
}
