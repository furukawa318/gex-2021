const box_el = document.getElementById("box");
console.log(document.getElementById("box"));

const PARAMS = {
  factor: 123,
  color: '#000',
  opacity: 0.5,
};

const pane = new Tweakpane.Pane(); //パネルの初期化

pane.addInput(PARAMS, 'factor');
pane.addInput(PARAMS, 'color');
pane.addInput(PARAMS, 'opacity', {
  min: 0,
  max: 1,
}); //パラメーターをパネルにセットする

// console.log(pane.addInput);

pane.on('change', (val) => {
  box_el.style.opacity = val;
});