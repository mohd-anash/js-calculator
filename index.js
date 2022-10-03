// Import stylesheets
import './style.css';

let root = document.getElementById('root');

function sum(num1, num2) {
  return num1 + num2;
}

function minus(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function allFeilds(p1, p2, id) {
  let inpFeilds = document.createElement('input');
  inpFeilds.setAttribute('type', p1);
  inpFeilds.setAttribute('id', id);
  root.append(inpFeilds);

  if (p1 !== 'submit') {
    inpFeilds.setAttribute('placeholder', p2);
  } else {
    inpFeilds.setAttribute('value', p2);
    inpFeilds.setAttribute('class', 'btn');
  }
}
allFeilds('text', 'Enter Value', 'num1');
allFeilds('number', 'Enter Number', 'num2');
allFeilds('submit', 'add', 'add');
allFeilds('submit', 'min', 'min');
allFeilds('submit', 'mul', 'mul');
allFeilds('submit', 'div', 'div');

let heading = document.createElement('h1');
root.append(heading);
heading.setAttribute('id', 'heading');

function allFldValue() {
  let feild1 = document.getElementById('num1');
  let feild2 = document.getElementById('num2');
  let alllBtn = document.querySelectorAll('.btn');
  alllBtn.forEach((inpBtn) => {
    inpBtn.addEventListener('click', function (e) {
      let feild1Val = parseInt(feild1.value);
      let feild2Val = parseInt(feild2.value);
      if (e.target.id === 'add') {
        let allFeildsSum = sum(feild1Val, feild2Val);
        heading.innerText = allFeildsSum;
      } else if (e.target.id === 'min') {
        let allFeildsSum = minus(feild1Val, feild2Val);
        heading.innerText = allFeildsSum;
      } else if (e.target.id === 'mul') {
        let allFeildsSum = multiply(feild1Val, feild2Val);
        heading.innerText = allFeildsSum;
      } else {
        let allFeildsSum = divide(feild1Val, feild2Val);
        heading.innerText = allFeildsSum;
      }
    });
  });
}
allFldValue();
