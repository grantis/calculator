const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator__display')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
  console.log('CLICK');
  console.log(e);
  console.log(e.target);
  console.log(display);
  console.log(display.textContent);

})
