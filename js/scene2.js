var earth_texture;
var milkyway_texture;
var stars;
var starCount = 150;
var earthRadius = 250;
var scaledKm = earthRadius / 6371;
var distanceDownscale = 20;
var lunarDistance = scaledKm * 400000 / distanceDownscale;

function preload() {
    earth_texture = loadImage("img/earth_texture.jpg");
    milkyway_texture = loadImage("img/milkyway_texture.jpg");
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    
      canvas.parent('sketch-holder');
    easycam = new Dw.EasyCam(this._renderer, {
        distance: lunarDistance * 1.3
    });
}

function draw() {
    drawScene2();
}


function drawScene2() {
    var earthRotation = frameCount;
    var mx = map(mouseX, 0, width, 0, 360);
    background(0);
    texture(milkyway_texture);
    sphere(3000);
    push();
    rotateZ(PI * 2);
    rotateZ(-0.401425728);
    rotateY(radians(earthRotation));
    noStroke();
    texture(earth_texture);
    ambientLight(150);
    var dirY = (mouseY / height - 0.5) * 4;
    var dirX = (mouseX / width - 0.5) * 4;
    directionalLight(255, 255, 255, 0, 0, -1);
    sphere(earthRadius);
}