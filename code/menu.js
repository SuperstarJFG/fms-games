function setup() {
  createCanvas(800, 600);
}


function draw() {
  background('orange');

        GAME_WINDOW_LENGTH = 225
        GAME_WINDOW_WIDTH = 175
        textSize(40)

    fill('white')
    text("Welcome Player!", GAME_WINDOW_WIDTH, 100)  
  rect(50, 150, GAME_WINDOW_LENGTH, GAME_WINDOW_WIDTH)
    
  rect(325,350, GAME_WINDOW_LENGTH, GAME_WINDOW_WIDTH)
  rect(325, 150, GAME_WINDOW_LENGTH, GAME_WINDOW_WIDTH)
  rect(50, 350, GAME_WINDOW_LENGTH, GAME_WINDOW_WIDTH)
//four buttons for games

  rect(575, 25, 200, 550)
//Score board for the games 


  fontPacifico = pygame.font.SysFont('Pacifico', 25, false, false)
  greeting = fontPacifico.render('Welcome Player!', true, (0,0,0))
//Trying to get a greeting to be displayed in the game, still being worked on

  fill(200);
  // color for rectangles
  
}
//following draw function creates buttons for the main menu, background and buttons

mouseClick