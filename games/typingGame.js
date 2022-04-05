/*
TO-DO LIST:

center canvas https://github.com/processing/p5.js/wiki/Positioning-your-canvas
change button font
add instructions
add next story button
*/


// happens only once when program starts
function setupGame2(){
    highScore2 = 0 // high score for game 2
    startPosFeedbackMillis = -9999
    startNegFeedbackMillis = -9999
    setupPlayAgainButton2()
    storiesCompleted = 0
    debug2 = false
    // startGame2() // starts game 2 when program starts (for testing)
    // debug2 = true
}

function setupPlayAgainButton2() {
    playAgainButton2 = createButton('Restart')
    playAgainButton2.position(2,80)
    playAgainButton2.size(175,70)
    playAgainButton2.mouseClicked(startGame2)
    playAgainButton2.hide()
}

// happens once every time typing game starts
function startGame2() {
    game2 = true
    menu = false
    clearMenu()
    done2 = false // is player on game 2 end screen
    newHighScore2 = false // did player just get new high score on game 2
    playAgainButton2.hide()
    endSoundPlayed = false
    frames2 = 0
    
    // score
    score2 = 0
    startMillis = Math.floor(millis())

    // choose story
    originalStories = ['the itsy bitsy spider crawled up the water spout.\ndown came the rain, and washed the spider out.\nout came the sun, and dried up all the rain,\nand the itsy bitsy spider went up the spout again.',
        'row, row, row your boat,\ngently down the stream.\nmerrily, merrily, merrily, merrily,\nlife is but a dream.',
        'the wheels on the bus go round and round,\nround and round,\nround and round.\nthe wheels on the bus go round and round,\nall through the town.',
        ]
    if (storiesCompleted < 3) {
        currentStory = storiesCompleted + 1   
    }
    else {
        currentStory = Math.floor(Math.random()*3)+1
    }
    originalStory = originalStories[currentStory-1]

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
                storyCompleted()
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

// happens when story gets completed
function storyCompleted() {
    story = originalStory
    altStory = originalStory
    done2 = true
    if (highScore2 == 0 || score2 < highScore2) {
        highScore2 = score2
        newHighScore2 = true
    }
    if (storiesCompleted < 3) {
        storiesCompleted = currentStory
    }
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

    // stories completed display
    textSize(20)
    text(`stories completed:`,578,30)
    text(`\n#1\n#2\n#3`,630,70)
    textFont('Arial')
    if (storiesCompleted == 0) {
        text(`❌\n❌\n❌`,655,85)
    }
    if (storiesCompleted == 1) {
        text(`✅\n❌\n❌`,655,85)
    }
    if (storiesCompleted == 2) {
        text(`✅\n✅\n❌`,655,85)
    }
    if (storiesCompleted == 3) {
        text(`✅\n✅\n✅`,655,85)
    }
    textFont(partyConfetti)
    noFill()
    strokeWeight(2)
    stroke('white')
    if (currentStory == 1) {
        rect(625,45,60,27)
    }
    if (currentStory == 2) {
        rect(625,70,60,27)
    }
    if (currentStory == 3) {
        rect(625,95,60,27)
    }
    noStroke()
    fill('white')

    // 'restart for next story'/'restart for random story' display
    textAlign(CENTER)
    if (done2) {
        if (storiesCompleted < 3) {
            text(`restart for\nnext story`,90,180)
        }
        else {
            text(`restart for\nrandom story`,90,180)
        }
    }
    textAlign(LEFT)

    // end animation
    if (done2) {
        frames2++
        if (currentStory == 1) {
            animateStory1()
        }
        if (currentStory == 2) {
            animateStory2()
        }
        if (currentStory == 3) {
            animateStory3()
        }
    }

    if (debug2) {
        done2 = true
        currentStory = 3
        textFont('arial')
        text(`currentStory=${currentStory} storiesCompleted=${storiesCompleted} done2=${done2}`,0,400)
        text(`frames2=${frames2}`,0,420)
        textFont(partyConfetti)
    }
}

function animateStory1() {
    spiderX = -400 * cos( (frames2)/200 )
    spiderY = 50 * cos( (frames2)/90 ) - 50
    image(spider,spiderX,spiderY)
}

function animateStory2() {
    spiderX = 660 * cos( (frames2)/200 ) + 200
    spiderY = 10 * cos( (frames2)/20 ) + 110
    image(spider2,spiderX,spiderY)
    boatX = spiderX + 50
    boatY = spiderY + 270
    image(boat,boatX,boatY,400,200)
    if (frames2<100) {
        waterY = 500-frames2
    }
    image(water,-30,waterY+27,860,213)
}

function animateStory3() {
    busRatio = (frames2 % 500)/500
    if (frames2 % 1000 < 500) {
        if (frames2 % 10 < 5) {
            currentBus = bus
        }
        else {
            currentBus = bus2
        }
        busX = busRatio * 1200 - 350
    }
    else {
        if (frames2 % 10 < 5) {
            currentBus = bus3
        }
        else {
            currentBus = bus4
        }
        busX = 800 - busRatio * 1200
    }
    busY = 452 + cos(frames2/3)/2
    image(currentBus,busX,busY,300,150)
    // text(`busRatio=${busRatio}`,0,440)
}

// happens when back button clicked
function clearGame2(){
    playAgainButton2.hide()
}