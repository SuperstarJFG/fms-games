//------------Variables for Game----------------------------------/
let highScore1 = 0
let startButton;
let gameRun = false
let activatePlayer = false
let removeText = true
let displayLevel = true
 
//----------------------------------------------------------------/


// happens only once when program starts
function setupGame1(){
    img = loadImage('assets/needleEdit.png')


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
    highScore = 0
    currentLevel = 1
    clearMenu()


    startButton.show(clearStartButton)

}

// happens every frame when needle game active
function drawGame1() {


    background('red')
    image(img, 0, 0)
    textSize(40)
    textFont()
    fill('white')
    text("Thread the Needle",200,50)
    textSize(20)

    text('Score: '+highScore+', High Score: '+highScore1,200,75)

    if (displayLevel == true)
    {
        stroke('white')
        text('Level ' + currentLevel, 280, 180)
    }

    if (gameRun == true)
    {
        drawThread()
        startGame()
    }
    
    if (activatePlayer == true)
    {
        playerControl()
        if (removeText == true)
        {
            printInstruction()
        }
    }

}

//------------------Creates the instructions and thread-------------//
function drawThread () 
{
    stroke(0)
    strokeWeight(7)
    line(start1x, start1y, start2x, start2y)
    strokeWeight(0)
}

function printInstruction () 
{
    stroke('white')
    text('Feed the thread through the needle!', 200, 200)
    text('Hold to control the thread!', 218, 220)
}

function deleteText ()
{
    if (highScore > 1)
    {
        removeText = false
    } else {
        removeText = true
    }
}
//--------------------------Player Functions------------------------//
function playerControl()
{
    if(mouseIsPressed === true)
    {
        if(mouseButton === LEFT)
        {
            stroke(0)
            strokeWeight(7)
            line(0, mouseY, mouseX, mouseY);
            strokeWeight(0)
            if (mouseX > 450)
            {
                trackHighScore()
                if (highScore > highScore1)
                {
                    highScore1 = highScore
                }
                activatePlayer = false
                startButton.show(clearStartButton)
                displayLevel = true
            }
            deleteText()
        }

    } else {
        stroke(0)
        strokeWeight(7)
        line(start1x, start1y, start2x, start2y)
        strokeWeight(0)

    }
    
}

function startGame ()
{
    if (mouseIsPressed === true)
    {
        activatePlayer = true
        gameRun = false
    }
}
function trackHighScore ()
{ 
    ++highScore
   ++ currentLevel
}
//------------------------Button Functions--------------------------//
function clearStartButton ()
{
    startButton.hide()
    gameRun = true
    displayLevel = false
}
function clearGame1(){
    gameRun = false
    activatePlayer = false
    startButton.hide()
}// happens when back button clicked
