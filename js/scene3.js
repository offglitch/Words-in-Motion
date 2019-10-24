//var txt1 = "You're in the future!";
//var txt2 = "You made some meaningful present moments.";
//var txt3 = "They're a part of the past now.";
//var txt4 = "Don't worry!";
//var txt5 = "You can make many more.";
//var txt6 = "You're in the future, anyway.";

function preload() {
    font = loadFont("assets/system85-mono-regular-pro.otf");
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketch-holder');

}

function draw() {
    drawScene1();
}

function drawScene1() {
    background(0, 0, 35, 25);
    var galaxy = {
        locationX: random(width),
        locationY: random(height),
        size: random(1, 6)
    }
    ellipse(mouseX, mouseY, galaxy.size, galaxy.size);
    ellipse(galaxy.locationX, galaxy.locationY, galaxy.size, galaxy.size);
//    textFont(font);
//    textSize(42);
//    textAlign(CENTER, CENTER);
//    fill(255);
//    typeWriter(txt1, 0, windowWidth / 2, 100, 100);
//    typeWriter(txt2, 0, windowWidth / 2, 200, 100);
//    typeWriter(txt3, 0, windowWidth / 2, 300, 100);
//    typeWriter(txt4, 0, windowWidth / 2, 400, 100);
//    typeWriter(txt5, 0, windowWidth / 2, 500, 100);
//    typeWriter(txt6, 0, windowWidth / 2, 600, 100);
//    text("You're in the future!", windowWidth / 2, 100);
//    text("You made some meaningful present moments.", windowWidth / 2, 200);
//    text("They're a part of the past now.", windowWidth / 2, 300);
//    text("Don't worry!", windowWidth / 2, 400);
//    text("You can make many more.", windowWidth / 2, 500);
//    text("You're in the future, anyway.", windowWidth / 2, 600);

}

function typeWriter(sentence, n, x, y, speed) {
  if (n < (sentence.length)) {
    text(sentence.substring(0, n+1), x, y);
    n++;
    setTimeout(function() {
      typeWriter(sentence, n, x, y, speed)
    }, speed);
  }
}