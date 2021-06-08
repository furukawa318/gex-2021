const pane = new Tweakpane.Pane();
const pane = new Pane();

const PARAMS = {
    factor: 123,
    title: 'hello',
    color: '#0f0',
  };
  
  pane.addInput(PARAMS, 'factor');
  pane.addInput(PARAMS, 'title');
  pane.addInput(PARAMS, 'color');

