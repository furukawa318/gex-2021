let color1 = {
    h: 0,
    s: 0,
    v: 0,
};
let color2 = {
  h: 0,
  s: 0,
  v: 0,
};
let color3 = {
  h: 0,
  s: 0,
  v: 0,
};
let color4 = {
  h: 0,
  s: 0,
  v: 0,
};
let color5 = {
  h: 0,
  s: 0,
  v: 0,
};


let radius = 0;
let line = 3;
let corner = 5;
let polygon =4; 

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
  createCanvas(500, 800);
  colorMode(HSB);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  noStroke();
  
  fill(color1.h, color1.s * 100, color1.v *100);
  rect(20, 20, 100, 100, radius);

  fill(color2.h, color2.s * 100, color2.v *100);
  drawForm1(60, 200, 60, line); // 横の位置、縦の位置、中心点と頂点までの距離、頂点数

  fill(color3.h, color3.s * 100, color3.v *100);
  drawStar(60, 330, 60, corner); 

  fill(color4.h, color4.s * 100, color4.v *100);
  drawPolygon(60, 450, 60, polygon);
  
  fill(color5.h, color5.s * 100, color5.v *100);
  rect(20, 550, 100, 100, radius);
}

function drawForm1(x, y, r, vertexNum) {
  push();
  translate(x, y);

  beginShape();
  for (let i = 0; i < vertexNum; i++) {
      vertex( r * sin(360 * i / vertexNum), - r * cos(360 * i / vertexNum));
  }
  endShape();

  pop();
}

function drawStar(x, y, r, prickleNum) {
  let vertexNum = prickleNum * 2; // 頂点数(トゲの数*2)
  let R; // 中心点から頂点までの距離

  push();
  translate(x, y);
  rotate(-90);

  beginShape();
  for (let i = 0; i < vertexNum; i++) {
    // R = i % 2 == 0 ? r : r / 2;
    if (i % 2 == 0) {
			R = r;
		} else {
			R = r / (2 - corner * 0.1);
		}

    vertex(R * cos(360 * i / vertexNum) , R * sin(360 * i / vertexNum));
  }
  endShape(CLOSE);

  pop();
}

function drawPolygon(x, y, r, curveNum) {
  push();
  translate(x, y);

  beginShape();
  for (let i = 0; i < curveNum; i++) {
      curveVertex(r * cos(360 * i / curveNum), r * sin(360 * i / curveNum));
  }
  curveVertex(r * cos(360 * 0 / curveNum), r * sin(360 * 0 / curveNum));
  curveVertex(r * cos(360 * 1 / curveNum), r * sin(360 * 1 / curveNum));
  curveVertex(r * cos(360 * 2 / curveNum), r * sin(360 * 2 / curveNum));
  endShape();

  pop();
}

const pane = new Tweakpane.Pane();

const PARAMS = {
  factor: 123,
  radius: 0,
  form1: 0,
  form2: 0,
  form3: 0,
  form4: 0,
  color1: {r: 0, g: 0, b: 0},
  color2: {r: 0, g: 0, b: 0},
  color3: {r: 0, g: 0, b: 0},
  color4: {r: 0, g: 0, b: 0},
  color5: {r: 0, g: 0, b: 0},
};

pane.addInput(PARAMS, 'factor');

pane.addInput(PARAMS, 'radius', {
  min: 0,
  max: 1,
  step: 0.01,
}).on('change', (val) => {
  // console.log(val);
  radius = (PARAMS.radius * 50);
  console.log(radius);
});

pane.addInput(PARAMS, 'form1', {
  min: 3,
  max: 6,
  step: 1,
}).on('change', (val) => {
  line = (PARAMS.form1);
  // console.log(polygon);
});

pane.addInput(PARAMS, 'form2', {
  min: 5,
  max: 10,
  step: 1,
}).on('change', (val) => {
  corner = (PARAMS.form2);
});

pane.addInput(PARAMS, 'form3', {
  min: 4,
  max: 10,
  step: 1,
}).on('change', (val) => {
  polygon = (PARAMS.form3);
  // console.log(polygon);
});

pane.addInput(PARAMS, 'form4', {
  min: 0,
  max: 1,
});


// 色パラメーター
// pane.addInput(PARAMS, 'color').on('change', (value) => {
//   // console.log(value);
//   color = (rgb2hsv(PARAMS.color.r, PARAMS.color.g, PARAMS.color.b));
//   // console.log(color);
// });


pane.addInput(PARAMS, 'color1').on('change', (value) => {
  // console.log(value);
  color1 = (rgb2hsv(PARAMS.color1.r, PARAMS.color1.g, PARAMS.color1.b));
  // console.log(color);
});

pane.addInput(PARAMS, 'color2').on('change', (value) => {
  // console.log(value);
  color2 = (rgb2hsv(PARAMS.color2.r, PARAMS.color2.g, PARAMS.color2.b));
  // console.log(color);
});

pane.addInput(PARAMS, 'color3').on('change', (value) => {
  // console.log(value);
  color3 = (rgb2hsv(PARAMS.color3.r, PARAMS.color3.g, PARAMS.color3.b));
  // console.log(color);
});

pane.addInput(PARAMS, 'color4').on('change', (value) => {
  // console.log(value);
  color4 = (rgb2hsv(PARAMS.color4.r, PARAMS.color4.g, PARAMS.color4.b));
  // console.log(color);
});

pane.addInput(PARAMS, 'color5').on('change', (value) => {
  // console.log(value);
  color5 = (rgb2hsv(PARAMS.color5.r, PARAMS.color5.g, PARAMS.color5.b));
  // console.log(color);
});
