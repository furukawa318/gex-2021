let color = {
    h: 0,
    s: 0,
    v: 0,
};

let radius = 0;

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
  createCanvas(500, 500);
  colorMode(HSB);
}

function draw() {
  background(255);
  noStroke();
  fill(color.h, color.s * 100, color.v *100);
  rect(20, 20, 100, 100, radius);
}

const pane = new Tweakpane.Pane();

const PARAMS = {
  factor: 123,
  color: {r: 0, g: 0, b: 0},
  radius: 0,
  form1: 0,
  form2: 0,
  form3: 0,
  form4: 0,
};

pane.addInput(PARAMS, 'factor');

pane.addInput(PARAMS, 'color').on('change', (value) => {
  // console.log(value);
  color = (rgb2hsv(PARAMS.color.r, PARAMS.color.g, PARAMS.color.b));
  // console.log(color);
});

pane.addInput(PARAMS, 'radius', {
  min: 0,
  max: 1,
}).on('change', (val) => {
  // console.log(val);
  radius = (PARAMS.radius * 50);
  console.log(radius);
});

pane.addInput(PARAMS, 'form1', {
  min: 0,
  max: 1,
});

pane.addInput(PARAMS, 'form2', {
  min: 0,
  max: 1,
});

pane.addInput(PARAMS, 'form3', {
  min: 0,
  max: 1,
});

pane.addInput(PARAMS, 'form4', {
  min: 0,
  max: 1,
});


