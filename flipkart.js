const searchButton = document.querySelector(".btn");
const searchInput = document.querySelector(".search input");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    alert(`You searched for: ${searchTerm}`);
  } else {
    alert("Please enter a search term.");
  }
});
const sliderImage = document.querySelector(".slider-image");
const images = [
  "store/slider.png",
  "store/slider2.webp",
  "store/slider3.webp",
  "store/slider4.webp",
  "store/slider5.webp",
  "store/slider6.webp",
  "store/slider7.webp",
];
let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  sliderImage.src = images[currentIndex];
}

setInterval(changeImage, 3000);

