function setup() {
  createCanvas(800, 600)
  setupMenu()
}

function setupMenu() {
  gameButtonLength = 450
  gameButtonHeight = 100

  button1 = createButton('Thread the Needle Game')
  button1.position(50,150)
  button1.size(gameButtonLength,gameButtonHeight)
  button1.mouseClicked(startGame1)
  
  button2 = createButton('Type the Story Game')
  button2.position(50,300)
  button2.size(gameButtonLength,gameButtonHeight)
  button2.mouseClicked(startGame2)
  
  button3 = createButton('Pop the Weasel Game')
  button3.position(50,450)
  button3.size(gameButtonLength,gameButtonHeight)
  button3.mouseClicked(startGame3)
}

menu = true
game1 = false
game2 = false
game3 = false

function startGame1(){
  game1 = true
  menu = false
}
function startGame2(){
  game2 = true
  menu = false
}
function startGame3(){
  game3 = true
  menu = false
}

function draw() {
  // change scenes
  if (menu) {
    drawMenu()
  }
  if (!menu) {
    hideMenu()
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
  
  // draw cursor
  fill('blue')
  circle(mouseX,mouseY,10)

  // Trying to get a greeting to be displayed in the game, still being worked on
  // fontPacifico = pygame.font.SysFont('Pacifico', 25, false, false)
  // greeting = fontPacifico.render('Welcome Player!', true, (0,0,0))
}

function drawMenu() {
  background('orange')
  
  // show buttons
  button1.show()
  button2.show()
  button3.show()

  // "Welcome Player!" message
  textSize(40)
  fill('white')
  text("Welcome Player!",120,100)  

  // Score board for the games
  fill('white')
  rect(550,50,200,500)
  
  fill('black')
  textSize(34)
  text('High Scores',555,55,195,495)
}

function hideMenu(){
  button1.hide()
  button2.hide()
  button3.hide()
}

function drawBackButton() {

}