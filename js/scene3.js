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

    textFont(font);
    textSize(42);
    textAlign(CENTER, CENTER);
    fill(255);
    text("You're in the future!", windowWidth / 2, 100);
    text("You made some meaningful present moments.", windowWidth / 2, 200);
    text("They're a part of the past now.", windowWidth / 2, 300);
    text("Don't worry!", windowWidth / 2, 400);
    text("You can make many more.", windowWidth / 2, 500);
    text("You're in the future, anyway.", windowWidth / 2, 600);

}