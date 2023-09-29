const Calculator = function(){
    return {
      numInput: '',
      buffer:'',
      operator: '',
      result: '',
      lastOp: '',
      operand: {
        left: 0,
        right: 0
      },
      readInput: function(event, testValue) {
        let key = event.target.dataset.key;
       
        if (testValue){
          key = testValue;
        }
        // filter user input
        
        if (key === 'cls') {
          log('current operation', key);
          this.clearAll();
          return;
        }
    
        if (Number(key) || key === '0') {
          if (!Number(this.lastOp) || this.lastOp !== '0'){
            this.numInput = '';
          }
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
        this.setOperands();
        switch (operator) {
          case 'add':
            this.add();
            break;
          case 'sub':
            this.sub();
            break;
          case 'mult':
            this.mult();
            break;
          case 'div':
            this.div();
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
  }

  export { Calculator };
  module.exports = { Calculator };