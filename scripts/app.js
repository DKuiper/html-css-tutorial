//Variable declaration

const drie = 3;
nmbr = 'ok';
function equals() {}

function number() {
  if (nmbr == 'ok') {
    nmbr = '3';
  }
  if (nmbr == '3 x') {
    nmbr = '3 x 3';
  }

  outputResult(0, nmbr);
}

function multiply() {
  if (nmbr == '3') {
    nmbr = '3 x';
  }
  outputResult(0, nmbr);
}

function equals() {
  if (nmbr == '3 x 3') {
    outputResult(9, nmbr);
  }
}

// Eventlisteners
oneBtn.addEventListener('click', number);
twoBtn.addEventListener('click', number);
threeBtn.addEventListener('click', number);
fourBtn.addEventListener('click', number);
fiveBtn.addEventListener('click', number);
sixBtn.addEventListener('click', number);
sevenBtn.addEventListener('click', number);
eightBtn.addEventListener('click', number);
nineBtn.addEventListener('click', number);
zeroBtn.addEventListener('click', number);
equalsBtn.addEventListener('click', equals);

addBtn.addEventListener('click', multiply);
subtractBtn.addEventListener('click', multiply);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', multiply);
