// one-time initial setup
function setupGame2(){
    highScore2=0 // high score for game 2
    startGame2() // starts game 2 when program starts (for testing)
}

// happens every time game starts
function startGame2(){
    game2 = true
    menu = false
    clearMenu()
    score2=0 // current score for game 3

    // create story with random blanks
    originalStory = 'the itsy bitsy spider crawled up the water spout.\ndown came the rain, and washed the spider out.\nout came the sun, and dried up all the rain,\nand the itsy bitsy spider went up the spout again.'
    story = ''
    for (i = 0; i < originalStory.length; i++) {
        if ((Math.random() > .9) && originalStory.charAt(i) != '\n') {
            story+='_'
        }
        else {
            story+=originalStory.charAt(i)
        }
    }
    
    insertArrow()
}

// happens when any key is pressed
function keyPressed() {
    if (key == originalStory.charAt(currentBlank)) {
        correctCharTyped()
    }
}

function insertArrow() {
    // insert ← after first _ in story
    let i=0
    while (story.charAt(i) != '←') {
        if (story.charAt(i) == '_') {
            story = insert(story, i+1, '←')
            currentBlank = i
        }
        i++
    }
    // refresh altStory
    altStory = story.replace('←','    ')
}

// happens when correct character is typed
function correctCharTyped() {
    // replace 
    story = story.replace('_',originalStory.charAt(currentBlank))
    insertArrow()
}

// function to insert text into existing string
function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}

// constant drawing of game when active
function drawGame2() {
    background('blue')
    textSize(40)
    textFont()
    fill('white')
    text("Type the Story",200,50)
    textSize(20)
    text('Score: '+score2+', High Score: '+highScore2,200,75)
    
    // print story
    textSize(30)
    textAlign(CENTER,CENTER)
    if (millis()%500 < 250) { // alternates every 1/4 second
        text(story,400,300)
    }
    else {
        text(altStory,400,300)
    }
    textAlign(LEFT) // resets alignment
}

// happens when back button clicked
function clearGame2(){
    
}