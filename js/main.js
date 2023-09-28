
const calc = {
  displayMain: document.querySelector('.num-main'),
  readInput: function(e) {
    let key = e.target;
    if (key.dataset.key[0] === 'K') {
      calc.printNum(key.dataset.key[1]);
    }
  },
  printNum: function(num) {
    this.displayMain.textContent += num;
  }
}

let keys = document.querySelectorAll('.key')

keys.forEach((key) => {
  key.addEventListener('click',calc.readInput);
});

