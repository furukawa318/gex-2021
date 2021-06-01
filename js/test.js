var w = 300, h= 300;
function setup() {
	createCanvas(w,h);
	background(255);
  colorMode(HSB, 255);
}

function draw() {
    noLoop();
    noStroke();
    translate(w/2,h/2);
    for(i=0;i < 200;i++){
        palarect(random(300), random(20, 50), random(TWO_PI), random(PI/4));
    }
}

function palarect(r, d, start, t){
    const x1 = r * cos(start), y1 = r * sin(start);
    const x2 = (r + d) * cos(start), y2 = (r + d) * sin(start);
    const x3 = (r + d) * cos(start + t), y3 = (r + d) * sin(start + t);
    const x4 = r * cos(start + t), y4 = r * sin(start + t);
    let c = map(start, 0, TWO_PI, 0, 255);
    fill(c, 255, 255, map(r, 0, 300, 0, 170));
    quad(x1,y1,x2,y2,x3,y3,x4,y4);
}
  