const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const oneBtn = document.getElementById('btn-1');
const twoBtn = document.getElementById('btn-2');
const threeBtn = document.getElementById('btn-3');
const fourBtn = document.getElementById('btn-4');
const fiveBtn = document.getElementById('btn-5');
const sixBtn = document.getElementById('btn-6');
const sevenBtn = document.getElementById('btn-7');
const eightBtn = document.getElementById('btn-8');
const nineBtn = document.getElementById('btn-9');
const zeroBtn = document.getElementById('btn-0');
const equalsBtn = document.getElementById('btn-=');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
