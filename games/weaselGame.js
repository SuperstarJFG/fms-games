// one-time initial setup
let img;
function setupGame3(){
    highScore3=0 // high score for game 3
    img = loadImage('assets/weasel1.png');
}

// happens every time game starts
function startGame3(){
    game3 = true
    menu = false
    clearMenu()
    score3=0 // current score for game 3
    weaselCLick()
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

}
//weasel image
function weaselImage(x,y){
    image(img, x-65, y-100, img.width / 9, img.height / 9);
    
}
function weaselCLick(){
    w = Math.ceil(Math.random()*11)
}
function mousePressed(){
    if((w==1) && (dist(mouseX,mouseY,150,290)<150)){
        weaselCLick()
    }
    if((w==2) && (dist(mouseX,mouseY,330,290) <150)){
        weaselCLick()
    }
    if((w==3) && (dist(mouseX,mouseY,480,290)<150)){
        weaselCLick()
    }
    if((w==4) && (dist(mouseX,mouseY,620,290)<150)){
        weaselCLick()
    }
    if((w==5) && (dist(mouseX,mouseY,230,390)<150)){
        weaselCLick()
    }
    if((w==6) && (dist(mouseX,mouseY,400,390)<150)){
        weaselCLick()
    }
    if((w==7) && (dist(mouseX,mouseY,560,390)<150)){
        weaselCLick()
    }
    if((w==8) && (dist(mouseX,mouseY,150,490)<150)){
        weaselCLick()
    }
    if((w==9) && (dist(mouseX,mouseY,330,490)<150)){
        weaselCLick()
    }
    if((w==10) && (dist(mouseX,mouseY,480,490)<150)){
        weaselCLick()
    }
    if((w==11) && (dist(mouseX,mouseY,620,490)<150)){
        weaselCLick()
    }
}


// happens when back button clicked
function clearGame3(){
}