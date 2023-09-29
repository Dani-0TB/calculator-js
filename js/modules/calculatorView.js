"use_strict"
const Controller = require('./calculatorController');

const View = {
  addListeners: function() {
    let keys = document.querySelectorAll('.key');
    this.keys.forEach((key) => {
      key.addEventListener('click', (e) => {
      });
    });
    return keys;
  }
}