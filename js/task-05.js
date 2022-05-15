const result = document.querySelector("#name-output");
const inputName = document.querySelector("#name-input");

inputName.addEventListener("input", function () {
    if (!inputName.value) {
        result.innerHTML = "Anonymous";
    } else { 
        result.innerHTML = inputName.value;
    };
});
