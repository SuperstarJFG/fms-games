/*
to-do:

add more stories
add visual display when complete
*/

// happens only once when program starts
function setupGame2(){
    highScore2 = 0 // high score for game 2
    startPosFeedbackMillis = -9999
    startNegFeedbackMillis = -9999
    setupPlayAgainButton2()
    // startGame2() // starts game 2 when program starts (for testing)
}

function setupPlayAgainButton2() {
    playAgainButton2 = createButton('Restart')
    playAgainButton2.position(2,80)
    playAgainButton2.size(175,70)
    playAgainButton2.mouseClicked(startGame2)
    playAgainButton2.hide()
}

function keyUp(e) { 
    var e = window.event || e;
    var key = e.keyCode;
    //space pressed
     if (key == 32) { //space
      e.preventDefault();
     }          
}

// happens once every time typing game starts
function startGame2(){
    game2 = true
    menu = false
    clearMenu()
    done2 = false
    newHighScore2 = false
    playAgainButton2.hide()
    endSoundPlayed = false
    
    // score
    score2 = 0
    startMillis = Math.floor(millis())

    originalStories = ['the itsy bitsy spider crawled up the water spout.\ndown came the rain, and washed the spider out.\nout came the sun, and dried up all the rain,\nand the itsy bitsy spider went up the spout again.',
        // ', . ., ., ,. ., ., ., ., ., ., ., ., ., .,the second story.',
        // ',. ,. ,. ., ., ., ., ,. ,. ., ,. ,. ,. ., .the third story.',
        ]
    originalStory = originalStories[Math.floor(Math.random()*originalStories.length)]

    // put random blanks in story
    story = originalStory
    for (i = 0; i<20; i++) {
        r = Math.floor(Math.random()*originalStory.length)
        if (story.charAt(r) != '\n') {
            story = setCharAt(story, r, '_')
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
    // if incorrect char
    if (game2) {
        if (!done2 && key != originalStory.charAt(currentBlank)) {
            startNegFeedbackMillis = millis()
            negSound.play()
        }
        // if correct char
        if (key == originalStory.charAt(currentBlank)) {
            if (currentBlank != lastBlank) {
                correctCharTyped()
            }
            else { // when game is done
                story = originalStory
                altStory = originalStory
                done2 = true
                if (highScore2 == 0 || score2 < highScore2) {
                    highScore2 = score2
                    newHighScore2 = true
                }
            }
        }
    }
}

function refreshArrow() {
    // insert < after first _ in story
    let i=0
    while (story.charAt(i) != '<') {
        if (story.charAt(i) == '_') {
            story = insert(story, i+1, '<')
            currentBlank = i
        }
        i++
    }
    // refresh altStory
    altStory = story.replace('<','  ')
}

// happens when correct character is typed
function correctCharTyped() {
    story = story.replace('_',originalStory.charAt(currentBlank))
    story = story.replace('<','')
    refreshArrow()
    startPosFeedbackMillis = millis()
    posSound.play()
    playAgainButton2.show()
}

// function to insert text into string
function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}

// function to replace index with char
function setCharAt(str, index, chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

// happens every frame when typing game is running
function drawGame2() {
    background('blue')

    // print title
    textSize(40)
    textFont()
    fill('white')
    text("Type the Story",200,50)

    // print subtitle (time and fastest time display)
    textSize(20)
    if (!done2) {
        score2 = Math.floor((millis() - startMillis)/1000)
    }
    if (highScore2 == 0) {
        subtitle2 = `Time: ${score2}`
    }
    else {
        subtitle2 = `Time: ${score2}\nFastest Time: ${highScore2}`
    }
    text(`${subtitle2}`,200,100)
    
    // print story
    textSize(20)
    textAlign(CENTER,CENTER)
    if (millis()%500 < 250) { // alternates every 1/4 second
        text(story,400,300)
    }
    else {
        text(altStory,400,300)
    }

    // next key display
    nextChar = originalStory.charAt(currentBlank)
    if (!done2) {
        if (nextChar != ' ' && nextChar != ',' && nextChar != '.') {
            nextKeyText = `push key: ${nextChar}`
            noFill()
            strokeWeight(7)
            stroke('white')
            rect(350,480,100,100)
            noStroke()
            fill('white')
            textSize(50)
            textFont('arial')
            text(nextChar.toUpperCase(),400,530)
        }
        if (nextChar == ' ') {
            nextKeyText = `push key: space`
            noFill()
            strokeWeight(7)
            stroke('white')
            rect(100,480,600,100)
            noStroke()
            fill('white')
        }
        if (nextChar == ',') {
            nextKeyText = `push key: comma`
            noFill()
            strokeWeight(7)
            stroke('white')
            rect(350,480,100,100)
            noStroke()
            fill('white')
            textSize(30)
            textFont('arial')
            text('<\n,',400,530)
        }
        if (nextChar == '.') {
            nextKeyText = `push key: period`
            noFill()
            strokeWeight(7)
            stroke('white')
            rect(350,480,100,100)
            noStroke()
            fill('white')
            textSize(30)
            textFont('arial')
            text('>\n.',400,530)
        }
    }
    if (done2) {
        nextKeyText = ''
    }
    textSize(30)
    textFont('partyConfetti')
    text(nextKeyText,400,450)
    
    // ✅ and ❌ feedback
    feedback = ''
    textSize(50)
    textFont('arial')
    if (millis() < startNegFeedbackMillis+300 ) {
        text('❌',400,590 + 50 * cos( (millis() - startNegFeedbackMillis)/50 ) )
    }
    if (millis() < startPosFeedbackMillis+300 ) {
        text('✅',400,590 + 50 * cos( (millis() - startPosFeedbackMillis)/50 ) )
    }
    textFont(partyConfetti)
    
    // STORY COMPLETE!/NEW FASTEST TIME! feedback + sounds
    storyCompleteText = ''
    if (done2) {
        storyCompleteText = 'STORY COMPLETE!'
        endSound = posSound2
        if (newHighScore2) {
            storyCompleteText = 'NEW FASTEST TIME!'
            endSound = posSound3
        }
        if (!endSoundPlayed) {
            endSound.play()
            endSoundPlayed = true
        }
    }
    text(storyCompleteText,400,470+9*cos(millis()/200))

    textAlign(LEFT) // resets alignment
}

// happens when back button clicked
function clearGame2(){
    playAgainButton2.hide()
}