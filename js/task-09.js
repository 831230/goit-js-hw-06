const colorBtn = document.querySelector(".change-color");
const resultValueColor = document.querySelector(".color");
const bodyBg = document.querySelector("body");


colorBtn.addEventListener("click", function getRandomHexColor() {
  bodyBg.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  resultValueColor.innerHTML = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});
