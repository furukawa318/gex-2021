let color = {
    h: 0,
    s: 0,
    v: 0,
};
let line = 3;
// let cells, offset, margin, d;

function rgb2hsv(r, g, b) {
    // 引数処理
    let tmp = [r, g, b];
    if (r !== undefined && g === undefined) {
      const cc = parseInt(r.toString().replace(/[^\da-f]/ig, '').replace(/^(.)(.)(.)$/, "$1$1$2$2$3$3"), 16);
      tmp = [cc >> 16 & 0xff, cc >> 8 & 0xff, cc & 0xff];
    }
    else {
      for (let i in tmp) tmp[i] = Math.max(0, Math.min(255, Math.floor(tmp[i])));
    }
    r = tmp[0];
    g = tmp[1];
    b = tmp[2];
  
    // RGB to HSV 変換
    const
      v = Math.max(r, g, b), d = v - Math.min(r, g, b),
      s = v ? d / v : 0, a = [r, g, b, r, g], i = a.indexOf(v),
      h = s ? (((a[i + 1] - a[i + 2]) / d + i * 2 + 6) % 6) * 60 : 0;
  
    // 戻り値
    return {h: h, s: s, v: v / 255};
}

function setup() {
    createCanvas(800, 800);
    colorMode(HSB);
    angleMode(DEGREES);
}

function draw() {
	background(255);
	noStroke();

	for (let k = 1; k < 10; k++){
		rotate(8 * k);
		for (let j = 1; j < 5; j++){
			translate(10 *j, 0);
			drawForm1(60, 200, 60, line);
		}
	}
	// frameRate(1 / 3);
}

function drawForm1(x, y, r, vertexNum) {
	push();
	translate(x, y);

	noStroke();
	fill(color.h, color.s * 100, color.v *100, 0.3);
  
	beginShape();
	for (let i = 0; i < vertexNum; i++) {
		let cx = r * sin(360 * i / vertexNum);
		let cy = - r * cos(360 * i / vertexNum);		
		vertex(cx, cy);
	}
	endShape();
  
	pop();
}

const pane = new Tweakpane.Pane();
const PARAMS = {
	form: 0,
	color: {r: 0, g: 0, b: 0},
};

pane.addInput(PARAMS, 'form', {
	min: 0,
	max: 6,
	step: 1,
}).on('change', (val) => {
	line = (PARAMS.form + 3);
	// console.log(polygon);
});

pane.addInput(PARAMS, 'color').on('change', (value) => {
	// console.log(value);
	color = (rgb2hsv(PARAMS.color.r, PARAMS.color.g, PARAMS.color.b));
	// console.log(color);
});
  