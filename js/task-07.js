const sizeRange = document.querySelector("#font-size-control");
const result = document.querySelector("#text");

sizeRange.addEventListener("input", function () {
    result.style.fontSize = sizeRange.value + "px";
});