// one-time initial setup
let img;
let timer3 = 20;
function setupGame3(){
    highScore3=0 // high score for game 3
    img = loadImage('assets/weasel1.png');
    restartButton3 = createButton('Play Again?')
    restartButton3.position(300,300)
    restartButton3.mousePressed(startGame3)
    restartButton3.hide()
}

// happens every time game starts
function startGame3(){
    timer3 = 20
    game3 = true
    menu = false
    clearMenu()
    score3=0 // current score for game 3
    w = Math.ceil(Math.random()*11)
    restartButton3.hide()
}


// constant drawing of game when active
function drawGame3() {
    background('green')
    textSize(40)
    textFont()
    fill('white')
    text("Pop the Weasel",200,50)
    textSize(20)
    text('Score: '+score3+', High Score: '+highScore3,200,75)
    if (timer3) {
        text('Timer: '+ timer3,200,100)
    }
    else {
        text("Time's Up!",200,100)
    }
    fill('orange')
    rect(90,230,600,320)
    fill('black')
    circle(150,290,70)
    circle(330,290,70)
    circle(480,290,70)
    circle(620,290,70)
    circle(230,390,70)
    circle(400,390,70)
    circle(560,390,70)
    circle(150,490,70)
    circle(330,490,70)
    circle(480,490,70)
    circle(620,490,70)
    
    if(w==1){
        weaselImage(150,290)
    }
    if(w==2){
        weaselImage(330,290)
    }
    if(w==3){
        weaselImage(480,290)
    }
    if(w==4){
        weaselImage(620,290)
    }
    if(w==5){
        weaselImage(230,390)
    }
    if(w==6){
        weaselImage(400,390)
    }
    if(w==7){
        weaselImage(560,390)
    }
    if(w==8){
        weaselImage(150,490)
    }
    if(w==9){
        weaselImage(330,490)
    }
    if(w==10){
        weaselImage(480,490)
    }
    if(w==11){
        weaselImage(620,490)
    }

    if(frameCount % 60 == 0 && timer3 > 0){
        timer3--
    }
    if(timer3 == 0){
        restartButton3.show()
    }
    if(score3 > highScore3 && timer3 == 0){
        highScore3 = score3
    }

    // print instructions
    fill('white')
    text('click as many weasels as you can in 20 seconds!',200,150)
}
//weasel image
function weaselImage(x,y){
    image(img, x-65, y-100, img.width / 9, img.height / 9);
    
}
function weaselClick(){
    if(timer3 != 0 && game3){
        w = Math.ceil(Math.random()*11)
        score3++
        posSound.play()
    }
}

function mousePressed(){
    dist3 = 85
    if((w==1) && (dist(mouseX,mouseY,150,290)<dist3)){
        weaselClick()
    }
    if((w==2) && (dist(mouseX,mouseY,330,290)<dist3)){
        weaselClick()
    }
    if((w==3) && (dist(mouseX,mouseY,480,290)<dist3)){
        weaselClick()
    }
    if((w==4) && (dist(mouseX,mouseY,620,290)<dist3)){
        weaselClick()
    }
    if((w==5) && (dist(mouseX,mouseY,230,390)<dist3)){
        weaselClick()
    }
    if((w==6) && (dist(mouseX,mouseY,400,390)<dist3)){
        weaselClick()
    }
    if((w==7) && (dist(mouseX,mouseY,560,390)<dist3)){
        weaselClick()
    }
    if((w==8) && (dist(mouseX,mouseY,150,490)<dist3)){
        weaselClick()
    }
    if((w==9) && (dist(mouseX,mouseY,330,490)<dist3)){
        weaselClick()
    }
    if((w==10) && (dist(mouseX,mouseY,480,490)<dist3)){
        weaselClick()
    }
    if((w==11) && (dist(mouseX,mouseY,620,490)<dist3)){
        weaselClick()
    }
}


// happens when back button clicked
function clearGame3(){
    restartButton3.hide()
}