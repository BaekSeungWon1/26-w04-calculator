const display = document.getElementById('display');
const numButtons = document.querySelectorAll('.btn-num');
const operatorButtons = document.querySelectorAll('.btn-operator');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

// 숫자 및 소수점 입력 처리
numButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (waitingForSecondOperand) {
      display.value = value;
      waitingForSecondOperand = false;
    } else {
      if (value === '.') {
        if (!display.value.includes('.')) {
          display.value += '.';
        }
      } else {
        display.value = display.value === '0' ? value : display.value + value;
      }
    }
  });
});

// 연산자 클릭 처리
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const nextOperator = button.dataset.action;
    const inputValue = parseFloat(display.value);

    if (firstOperand === null && !isNaN(inputValue)) {
      firstOperand = inputValue;
    } else if (operator && !waitingForSecondOperand) {
      const result = calculate(firstOperand, inputValue, operator);
      display.value = String(result);
      firstOperand = result;
    }

    waitingForSecondOperand = true;
    operator = nextOperator;
  });
});

// 연산 수행 함수
function calculate(first, second, op) {
  if (op === 'add') return first + second;
  if (op === 'subtract') return first - second;
  if (op === 'multiply') return first * second;
  if (op === 'divide') {
    if (second === 0) {
      alert('0으로 나눌 수 없습니다.');
      return first;
    }
    return first / second;
  }
  return second;
}

// '=' 버튼 (결과 계산)
equalsButton.addEventListener('click', () => {
  if (operator === null || waitingForSecondOperand) return;

  const secondOperand = parseFloat(display.value);
  const result = calculate(firstOperand, secondOperand, operator);
  
  // 부동소수점 오차 방지 (소수점 최대 8자리 정돈)
  display.value = Number(Math.round(result + 'e8') + 'e-8');
  
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = false;
});

// 'C' 버튼 (초기화)
clearButton.addEventListener('click', () => {
  display.value = '0';
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = false;
});