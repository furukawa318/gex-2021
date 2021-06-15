
var w = 400;
var h = 400;
var n = 200;
var maxR = 95;
var minR = 5;
function setup() {
  createCanvas(w, h);
  background(0);
  blendMode(SCREEN);
}

function draw() {
  noLoop();
  stroke(255, 50);
  for(x = -w * 10; x < 11 * w; x += 100){
    line(x, h, 200, -5);
  }
  var k = 5;
  for(y = 0; y < h; y += k){
    line(0, y, w, y);
    k += 3;
  }
  noStroke();
  for(i =0; i < n; i++){
    drawParticle(i);
  }
}

function drawParticle(i){
  var r = i / (n / (maxR - minR)) + minR;
  var x = random(w);
  var y = pow((h / n) * i, 2) / h;
  var cr = random([[3,0,3], [0,3,3], [3,3,0], [0,0,0]]);
  for(j=0;j < r;j++){
    var alph = pow(j, 6) * 255 / pow(r, 6);
    fill(color(255 - j * cr[0], 255 - j * cr[1], 255 - j * cr[2], alph));
    var d = r - j;
    ellipse(x, y, d);
  }
}
    