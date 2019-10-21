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
    textSize(45);
    textAlign(CENTER, CENTER);
    fill(255);
    text("Congrats! You've completed The Present.", windowWidth / 2, 100);

}