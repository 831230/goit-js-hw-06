const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryUl = document.querySelector(".gallery");

const urlArray = [];

for (let image of images) {
  urlArray.push(image.url);
  const galleryLi = document.createElement("li");
  galleryUl.prepend(galleryLi);
  galleryLi.insertAdjacentHTML("afterbegin", "<img class=image>");
  galleryLi.classList.add("item");
}
const imagesArr = document.querySelectorAll(".image");
for (let i = 0; i < imagesArr.length; i++) {
  imagesArr[i].src = urlArray[i];
}

