//------------Variables for Game----------------------------------/
let highScore1 = 0
let startButton;
let gameRun = false
let activatePlayer = false
let removeText = true
let displayLevel = true
let timer = false 
//----------------------------------------------------------------/


// happens only once when program starts
function setupGame1(){
    level1 = loadImage('assets/level1.png')
    level2 = loadImage('assets/level2.png')
    level3 = loadImage('assets/level3.png')
    level4 = loadImage('assets/level4.png')
    level5 = loadImage('assets/level5.png')
    level6 = loadImage('assets/level6.png')
    level7 = loadImage('assets/level7.png')

    gameButtonLength = 265
    gameButtonHeight = 100

    start1x = 1;
    start2x = 250;
    start1y = 350;
    start2y = 350;
    //starting position for the thread

// the code below creates the start button
    restart = createButton('Play Again?')
    restart.position(265, 2500)
    restart.size(gameButtonLength, gameButtonHeight)
    restart.style('background-color:orange')
    restart.mousePressed(clearRestartButton)
    restart.hide();


    startButton = createButton('Start!')
    startButton.position(265, 200)
    startButton.size(gameButtonLength, gameButtonHeight)
    startButton.style('background-color:yellow')
    startButton.mousePressed(clearStartButton)
    startButton.hide();
    //creates start button
}


//--------------------resets the game everytime it's called-------/
function startGame1(){
    game1 = true
    menu = false
    
    highScore = 0
    currentLevel = 0

    targetPointX = 0;
    targetPointY1 = 0;
    targetPointY2 = 0;
    //target points to score

    clearMenu()

    startButton.show(clearStartButton)
}

//-----------------------draws th game and its functions-------------/
function drawGame1() 
{
    background('red')
    switch (currentLevel)
    {
        case 0:
            break;
        case 1:
            image(level1, 0, 0)
            targetPointX = 615;
            targetPointY1 = 310;
            targetPointY2 = 430;
            break
        case 2: 
            image(level2, 0, 0)
            targetPointX = 615;
            targetPointY1 = 290;
            targetPointY2 = 365;
            break
        case 3:
            image(level3, 0, 0)
            targetPointX = 605;
            targetPointY1 = 245;
            targetPointY2 = 305;
            break
        case 4:
            image(level4, 0, 0)
            targetPointX = 608;
            targetPointY1 = 245;
            targetPointY2 = 285;
            break
        case 5:
            image(level5, 0, 0)
            targetPointX = 615;
            targetPointY1 = 265;
            targetPointY2 = 295;
            break
        case 6:
            image(level6, 0, 0)
            targetPointX = 615;
            targetPointY1 = 235;
            targetPointY2 = 260;
            break
        case 7: 
            image(level7, 0, 0)
            targetPointX = 620;
            targetPointY1 = 270;
            targetPointY2 = 285;
            break
        case 8: 
            removeText = false
            activatePlayer = false
            text('Congratulations! You have completed the game!', 150, 200 )
            text('Play Again?', 170, 215)
            restart.show(clearRestartButton)

            highScore1 = highScore
            timer = false
            break


    }
    /* changes starting points for each of the needle and draws the
    next level of the game */

    textSize(40)
    textFont()
    fill('white')
    text("Thread the Needle",200,50)
    textSize(20)

    
    if (timer)
    {
        highScore = Math.floor(millis() / 1000)
        text('Score: '+highScore+', High Score: '+highScore1,200,75)
    }

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
    text('Feed the thread through the needle!', 250, 200)
    text('Hold to control the thread!', 270, 220)
}

function printMissedTarget ()
{
    stroke('white')
    text('Oh no! You miseed!', 250, 200)
    text('Try Again!', 270, 220)
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
            line(0, mouseY, mouseX + 25, mouseY);
            strokeWeight(0)
            if (mouseX > targetPointX && mouseY > targetPointY1 && mouseY < targetPointY2 && mouseX < targetPointX + 5)
            {
                trackHighScore()
                deleteText()
                //--resets the thread, the start button and displays current level--//
                
                    activatePlayer = false
                    startButton.show(clearStartButton)
                    displayLevel = true
    
                //------------------------------------------------/
            } 
            if (mouseX > targetPointX && mouseY < targetPointY1 || mouseX > targetPointX && mouseY > targetPointY2)
            {
                printMissedTarget()
                removeText = false
                activatePlayer = true
            } else {
                removeText = true
            }   
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
}
//------------------------Button Functions--------------------------//
function clearStartButton ()
{
    startButton.hide()
    gameRun = true
    displayLevel = false
    timer = true
    ++ currentLevel
}
function clearRestartButton () 
{
    restart.hide()
    gameRun = true
    displayLevel = false
    timer = true
}
function clearGame1(){
    gameRun = false
    timer = false
    activatePlayer = false
    startButton.hide()
    restart.hide()
    highScore = 0
}// happens when back button clicked
