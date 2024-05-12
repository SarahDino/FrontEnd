var input = document.querySelector('input[type="number"]');
input.addEventListener('input', function() {
  if (this.value < 0) {
    this.value = 0;
  } else if (this.value > 100) {
    this.value = 100;
  }
});

var counterValue = document.querySelector("#counter-value");
var counterIncrement = document.querySelector("#counter-increment");
var counterDecrement = document.querySelector("#counter-decrement");
var count = 0;

this.counterIncrement.addEventListener('click', () => {
  if (count < 100) {
    count++;
    this.counterValue.setAttribute("value", count);
  }
});

this.counterDecrement.addEventListener('click', () => {
  if (count > 0) {
    count--;
    this.counterValue.setAttribute("value", count);
  }
});
