"use_strict"

function Calculator() {
  return {
    inputNumber: 0,
    result: 0,
    buffer: 0,
    oprator: '',
    operand: {
      left: 0,
      right: 0
    },
    lastOp: '',

    get inputNumber() {
      return this.inputNumber;
    },

    get result() {
      return this.result;
    },

    get buffer() {
      return this.buffer;
    },

    get operator() {
      return this.oprator;
    },

    get operand() {
      return this.operand;
    },

    get lastOp() {
      return this.lastOp;
    },

    set inputNumber(number) {
      this.number = number;
    },

    set result(number) {
      this.result = number;
    },

    set buffer(number) {
      this.buffer = number;
    },

    set operator(operator) {
      this.oprator = operator;
    },

    set operand(operand) {
      this.operand.left = operand.left;
      this.operand.right = operand.right;
    },
    
    set lastOp(operation) {
      this.lastOp = operation;
    }
  }
}

module.exports = Calculator;