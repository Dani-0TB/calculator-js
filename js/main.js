const DEBUG = false;

const calc = {
  numInput: '',
  operator: '',
  result: '',
  lastOp: '',
  operand: {
    left: 0,
    right: 0
  },
  readInput: function(e) {
    let key = e.target.dataset.key;
    
    if (Number(key)) {
      this.numInput += key;
      return;
    }

    if (key === 'cls') {
      this.clearAll();
      return;
    }

    if (key === 'enter'){
      if (this.operator) {
        this.operate(this.operator);
        return;
      }
    }
    
    if (this.operator === '') {
      this.operator = key;
      this.result = this.numInput;
      this.numInput = '';
      return;
    }

  },
  operate: function(operator) {
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
  },
  logMe: function() {
    log('numInput:', this.numInput);
    log('operator:', this.operator);
    log('result:', this.result);
    log('lastOp:', this.lastOp);
  }
}

let keys = document.querySelectorAll('.key')

keys.forEach((key) => {
  key.addEventListener('click', (e) => {
    calc.readInput(e)
    calc.updateDisplay()
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