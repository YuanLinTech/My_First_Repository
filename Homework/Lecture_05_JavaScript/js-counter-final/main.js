// fetch elements
var plusButton = document.querySelector('#control-plus');
var minusButton = document.querySelector('#control-minus');
var resetButton = document.querySelector('#control-reset');
var resParagraph = document.querySelector('#control-num');

var counter = 0;
plusButton.addEventListener('click', function () {
  counter++;
  resParagraph.innerHTML = counter;
});

minusButton.addEventListener('click', function () {
  counter--;
  resParagraph.innerHTML = counter;
});

resetButton.addEventListener('click', function () {
  counter = 0;
  resParagraph.innerHTML = counter;
})
