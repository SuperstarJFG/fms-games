/*
to-do:

add audio feedback
add viseal feedback
put square around next key with special cases
add more stories
*/

// happens only once when program starts
function setupGame2(){
    highScore2=0 // high score for game 2
    // startGame2() // starts game 2 when program starts (for testing)
}

// happens once every time typing game starts
function startGame2(){
    done2 = false
    game2 = true
    menu = false
    clearMenu()
    
    // score
    score2 = 0
    startMillis = Math.floor(millis())

    originalStories = ['the itsy bitsy spider crawled up the water spout.\ndown came the rain, and washed the spider out.\nout came the sun, and dried up all the rain,\nand the itsy bitsy spider went up the spout again.',
    'the second story.',
    'the third story.']
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
    // replace 
    story = story.replace('_',originalStory.charAt(currentBlank))
    story = story.replace('<','')
    refreshArrow()
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

// happens every frame when typing game active
function drawGame2() {
    background('blue')

    // title
    textSize(40)
    textFont()
    fill('white')
    text("Type the Story",200,50)

    // subtitle
    textSize(20)
    if (!done2) {
        score2 = Math.floor((millis() - startMillis)/1000)
    }
    text(`Time: ${score2}, Best Time: ${highScore2}`,200,100)
    
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
    nextCharacter = 
    nextKeyText = `Next Key: ${originalStory.charAt(currentBlank)}`
    if (originalStory.charAt(currentBlank) == ' ') {
        nextKeyText = `Next Key: space`
    }
    if (originalStory.charAt(currentBlank) == ',') {
        nextKeyText = `Next Key: comma`
    }
    if (originalStory.charAt(currentBlank) == '.') {
        nextKeyText = `Next Key: period`
    }
    if (done2) {
        nextKeyText = 'All Done!'
    }
    text('next key')
    text(nextKeyText,400,500)
    
    textAlign(LEFT) // resets alignment
}

// happens when back button clicked
function clearGame2(){
    
}