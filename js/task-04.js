const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

const counterValue = document.querySelector('#value');

decrement.addEventListener("click", function () { 
    counterValue.innerHTML = counterValue-1;
    return counterValue;
})