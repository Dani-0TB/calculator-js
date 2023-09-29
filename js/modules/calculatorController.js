const Calculator = require('./calculatorModel');

"use_strict";

function Controller() {
  this.calculator = new Calculator,

  this.add = function(operand) {
    return operand.left + operand.right;
  }

  this.subtract = function(operand) {
    return operand.left - operand.right;
  }

  this.multiply = function(operand) {
    return operand.left * operand.right;
  }

  this. divide = function(operand) {
    return operand.left / operand.right;
  }
}

module.exports = Controller;