const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

const counterValue = document.querySelector('#value');

decrement.addEventListener("click", function () {
    let result = Number(counterValue.textContent) - 1;
    counterValue.innerHTML = result;
});

increment.addEventListener("click", function () {
    let result = Number(counterValue.textContent) + 1;
    counterValue.innerHTML = result;
});