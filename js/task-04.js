const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

const one = 1;

const counterValue = document.querySelector('#value');

decrement.addEventListener("click", function () { 
    counterValue.innerHTML = counterValue-Number(one);
    return counterValue;
})