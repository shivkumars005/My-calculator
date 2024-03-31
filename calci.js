let screen = document.getElementById('screen');
let expression = '';

function appendToScreen(value) {
  if (screen.textContent === '0') {
    screen.textContent = value;
  } else {
    screen.textContent += value;
  }
  expression += value;
}

function clearScreen() {
  screen.textContent = '0';
  expression = '';
}

function operate(operator) {
  expression += operator;
  screen.textContent = operator;
}

function calculate() {
  try {
    let result = eval(expression);
    screen.textContent = result;
    expression = result.toString();
  } catch (error) {
    screen.textContent = 'Error';
    expression = '';
  }
}
