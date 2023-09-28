const calc = {
  displayMain: '',
  operator: '',
  result: '',
  readInput: function(e) {
    let key = e.target.dataset.key;
    if (key[0] === 'K') {
      calc.displayMain += key[1];
      return;
    }
    if (key === 'cls') {
        if (this.displayMain || this.result || this.operator){
          this.clearAll();
          return;
        }
    }
    if (key === 'enter'){
        if (this.operator) {
          this.operate(this.operator);
          return;
        }
    }
    
    if (this.operator === '') {
      this.operator = key;
      this.result = this.displayMain;
      this.displayMain = '';
      return;
    }

    this.operate(this.operator)
  },
  operate: function(operator) {
    switch (operator) {
      case 'add':
        calc.add()
    }
  },
  add: function(){
    let num1 = Number(calc.displayMain);
    let num2 = Number(calc.result);
    let result = num1 + num2;
    calc.result = String(result);
  },
  updateDisplay: function() {
    let main = document.querySelector('.num-main');
    let result = document.querySelector('.num-result');
    main.textContent = this.displayMain;
    result.textContent = this.result;
  },
  clearAll: function() {
    this.displayMain = '';
    this.operator = '';
    this.result = '';
  } 
}

let keys = document.querySelectorAll('.key')

keys.forEach((key) => {
  key.addEventListener('click', (e) => {
    calc.readInput(e)
    calc.updateDisplay()
  });
  
});

