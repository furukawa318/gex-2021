
const box_el = document.getElementById("box");
console.log(document.getElementById("box"));


const PARAMS = {
  factor: 123,
  background: {r: 160, g: 56, b: 56},
  opacity: 0.5,
};

const pane = new Tweakpane.Pane(); //パネルの初期化

pane.addInput(PARAMS, 'factor');
pane.addInput(PARAMS, 'background');
pane.addInput(PARAMS, 'opacity', {
  min: 0,
  max: 1,
}); //パラメーターをパネルにセットする

pane.on('change', (val) => {
  // console.log(PARAMS.opacity);
  box_el.style.opacity = PARAMS.opacity;
});

pane.on('change', () => {
  box_el.style.background = `rgb(${PARAMS.background.r}, ${PARAMS.background.g}, ${PARAMS.background.b})`;
  // console.log(`rgb(${PARAMS.background.r}, ${PARAMS.background.g}, ${PARAMS.background.b})`);
});



