const validationInput = document.querySelector("#validation-input");
const inputDataLength = document.querySelector('input[data-length="6"]');

validationInput.addEventListener("blur", (event) => {
    console.log("blured:", event.currentTarget.value);
    if (event.currentTarget.value.length === Number(inputDataLength.dataset.length)) {
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid");
    } else { 
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
    };
});