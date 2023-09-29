import { Calculator } from "./calculator";

const DEBUG = true;

const calc = new Calculator();

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



module.exports.calculator = calc;