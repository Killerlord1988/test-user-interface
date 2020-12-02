var range = document.querySelector('.fan-speed-range');

noUiSlider.create(range, {
  start: 3, // Handle start position
  step: 1, // Slider moves in increments of '10'
  behaviour: 'tap-drag', // Move handle on tap, bar is draggable
  connect: [true, false],
  range: { // Slider can select '0' to '100'
      'min': 1,
      'max': 5
  },
  pips: { // Show a scale with the slider
      mode: 'count',
      density: 100,
      values: 5
  }
});
