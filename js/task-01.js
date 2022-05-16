const arrayCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${arrayCategories.length}`);

arrayCategories.forEach(function (category) {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.querySelectorAll("li").length}`);
});