/*
to-do:

make amount of blanks consistent
score
high score
all caps font
put square around next key with special case for space
*/

// happens only once when program starts
function setupGame2(){
    highScore2=0 // high score for game 2
    // startGame2() // starts game 2 when program starts (for testing)
}

// happens once every time typing game starts
function startGame2(){
    game2 = true
    menu = false
    clearMenu()
    score2 = millis() // resets current time for game 3
    blanks = 0

    // create story with random blanks
    originalStory = 'the itsy bitsy spider crawled up the water spout.\ndown came the rain, and washed the spider out.\nout came the sun, and dried up all the rain,\nand the itsy bitsy spider went up the spout again.'
    story = ''
    for (i = 0; i < originalStory.length; i++) {
        if ((Math.random() > .9) && originalStory.charAt(i) != '\n') {
            story+='_'
            blanks++
        }
        else {
            story+=originalStory.charAt(i)
        }
    }

    refreshArrow()
    
    // get last blank index
    lastBlank = 0
    for (i = story.length; i >= 0; i--) {
        if (story.charAt(i) == '_') {
            lastBlank = i-1
            return
        }
    }
}

// happens when any key is pressed
function keyPressed() {
    if (key == originalStory.charAt(currentBlank)) {
        if (currentBlank != lastBlank) {
            correctCharTyped()
        }
        else {
            story = originalStory
            altStory = originalStory
        }
    }
}

function refreshArrow() {
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
    story = story.replace('←','')
    refreshArrow()
}

// function to insert text into existing string
function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}

// happens every frame when typing game active
function drawGame2() {
    background('blue')
    textSize(40)
    textFont()
    fill('white')
    text("Type the Story",200,50)
    textSize(20)
    text(`Time: ${score2}, Best Time: ${highScore2}, Blanks: ${blanks}`,200,75)
    
    // print story
    textSize(20)
    textAlign(CENTER,CENTER)
    if (millis()%500 < 250) { // alternates every 1/4 second
        text(story,400,300)
    }
    else {
        text(altStory,400,300)
    }

    // print next key
    if (originalStory.charAt(currentBlank) == ' ') {
        text(`Next Key: space`,400,500)
    }
    else {
        text(`Next Key: ${originalStory.charAt(currentBlank)}`,400,500)
    }
    
    textAlign(LEFT) // resets alignment
}

// happens when back button clicked
function clearGame2(){
    
}