const result = document.querySelector("#name-output");
const inputName = document.querySelector("#name-input");

inputName.addEventListener("input", function () {
    result.innerHTML = inputName.value;
});
