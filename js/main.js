
const calc = {
  
  readInput: function(e) {
    let key = e.target;
    console.log(key.dataset.key)
  },
}

let keys = document.querySelectorAll('.key')

keys.forEach((key) => {
  key.addEventListener('click',calc.readInput);
});

