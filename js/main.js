const DEBUG = true;

const calc = {
  numInput: '',
  buffer:'',
  operator: '',
  result: '',
  lastOp: '',
  operand: {
    left: 0,
    right: 0
  },
  readInput: function(e) {
    let key = e.target.dataset.key;
    // filter user input
    
    if (key === 'cls') {
      log('current operation', key);
      this.clearAll();
      return;
    }

    if (this.lastOp == 'enter'){
      this.buffer = this.numInput;
      this.numInput = '';
    }

    if (Number(key)) {
      this.numInput += key;
      return;
    }

    // Operator is empty
    if (this.operator === '') {
      log('current operation', key);
      this.operator = key;
      this.result = this.numInput;
      this.numInput = '';
      return;
    }

    if (key !== this.operator && key !== 'enter'){
      this.operator = key;
      this.numInput = '';
      return;
    }

    if (this.operator && this.numInput && this.result) {
      this.operate(this.operator);
    }

  },
  operate: function(operator) {
    this.buffer
    this.setOperands();
    switch (operator) {
      case 'add':
        calc.add();
        break;
      case 'sub':
        calc.sub();
        break;
      case 'mult':
        calc.mult();
        break;
      case 'div':
        calc.div();
        break;
    }
  },
  add: function(){
    this.setResult(this.operand.left + this.operand.right);
  },
  sub: function(){
    this.setResult(this.operand.left - this.operand.right);
  },
  mult: function(){
    this.setResult(this.operand.left * this.operand.right);
  },
  div: function(){
    this.setResult(this.operand.left / this.operand.right);
  },
  setOperands: function() {
    this.operand.left = Number(this.result);
    this.operand.right = Number(this.numInput);
  },
  setResult: function(number) {
    this.result = String(number);
  },
  setLastOp: function(op) {
    this.lastOp = op;
  },
  updateDisplay: function() {
    let main = document.querySelector('.num-input');
    let result = document.querySelector('.num-result');
    main.textContent = this.numInput;
    result.textContent = this.result;
  },
  clearAll: function() {
    this.numInput = '';
    this.operator = '';
    this.result = '';
    this.lastOp = '';
    this.buffer = '';
  },
  logMe: function() {
    console.clear()
    log('numInput:', this.numInput);
    log('operator:', this.operator);
    log('result:', this.result);
    log('buffer:', this.buffer);
    log('lastOp:', this.lastOp);
  }
}

let keys = document.querySelectorAll('.key')

keys.forEach((key) => {
  key.addEventListener('click', (e) => {
    calc.readInput(e)
    calc.updateDisplay()
    calc.setLastOp(key.dataset.key)
    calc.logMe()
  });
  
});

function log(message, ...args){
  if (DEBUG) {
    if (args) {
      args.forEach((arg) => {
        message += ` ${arg}\n`;
      });
    }
    console.log(message);
  }
}