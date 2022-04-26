function preload() {
  partyConfetti = loadFont('assets/partyConfetti.ttf')
  posSound = loadSound('assets/posSound.mp3')
  posSound2 = loadSound('assets/posSound2.mp3')
  posSound3 = loadSound('assets/posSound3.mp3')
  negSound = loadSound('assets/negSound.mp3')
  spider = loadImage('assets/spider.png')
  spider2 = loadImage('assets/spider2.png')
  boat = loadImage('assets/boat.png')
  water = loadImage('assets/water.png')
  bus = loadImage('assets/bus.png')
  bus2 = loadImage('assets/bus2.png')
  bus3 = loadImage('assets/bus3.png')
  bus4 = loadImage('assets/bus4.png')
}

function setup() {
  textFont(partyConfetti)
  createCanvas(800, 600)
  setupMenu()
  setupGame1()
  setupGame2()
  setupGame3()
  setupBackButton()
}

function setupMenu() {
  gameButtonLength = 450
  gameButtonHeight = 100

  button1 = createButton('Thread the Needle Game')
  button1.position(50,150)
  button1.size(gameButtonLength,gameButtonHeight)
  button1.style('background-color:red')
  button1.mouseClicked(startGame1)
  
  button2 = createButton('Type the Story Game')
  button2.position(50,300)
  button2.size(gameButtonLength,gameButtonHeight)
  button2.style('background-color:blue')
  button2.mouseClicked(startGame2)
  
  button3 = createButton('Pop the Weasel Game')
  button3.position(50,450)
  button3.size(gameButtonLength,gameButtonHeight)
  button3.style('background-color:green')
  button3.mouseClicked(startGame3)
}

menu = true
game1 = false
game2 = false
game3 = false

function draw() {
  // change scenes
  if (menu) {
    drawMenu()
  }
  if (!menu) {
    drawBackButton()
  }
  if (game1) {
    drawGame1()
  }
  if (game2) {
    drawGame2()
  }
  if (game3) {
    drawGame3()
  }
}

function drawMenu() {
  background('orange')
  
  // show buttons
  button1.show()
  button2.show()
  button3.show()

  // "Welcome Player!" title
  textSize(50)
  fill('white')
  text("Welcome Player!",85,80)  

  // draw scoreboard background
  fill('orange')
  stroke('white')
  strokeWeight(10)
  rect(550,80,200,500)
  strokeWeight(0)
  // draw scoreboard title
  fill('white')
  textSize(32)
  textAlign(CENTER,CENTER)
  text('High Scores',650,105)
  // draw game 1 score bg
  fill('red')
  rect(555,125,190,150)
  // draw game 2 score bg
  fill('blue')
  rect(555,275,190,150)
  // draw game 3 score bg
  fill('green')
  rect(555,425,190,150)
  // print scores
  fill('white')
  textSize(50)
  text(highScore1,650,200)
  textSize(30)
  if (highScore2 == 0) {
    textForHighScore2 = `Not Yet\nPlayed`
  }
  if (highScore2 == 1) {
    textForHighScore2 = `Fastest Time:\n1 Second`
  }
  if (highScore2 > 1) {
    textForHighScore2 = `Fastest Time:\n${highScore2} Seconds`
  }
  text(textForHighScore2,650,350)
  textSize(50)
  text(highScore3,650,500)
  textAlign(LEFT) // resets alignment
}

// happens when a game is selected
function clearMenu(){
  button1.hide()
  button2.hide()
  button3.hide()
}

function setupBackButton(){
  backButton = createButton('← Back')
  backButton.position(2,2)
  backButton.size(175,70)
  backButton.mouseClicked(backButtonClicked)
  backButton.hide()
}

function drawBackButton() {
  backButton.show()
}

function backButtonClicked(){
  clearGame1()
  clearGame2()
  clearGame3()
  game1 = false
  game2 = false
  game3 = false
  menu = true
  backButton.hide()
}

// prevents spacebar from scrolling down
window.addEventListener('keydown', (e) => {  
  if (e.keyCode === 32 && e.target === document.body) {  
    e.preventDefault();  
  }  
});