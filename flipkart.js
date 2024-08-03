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
const slider = document.querySelector(".slider");
const images = [
  "slider.png",
  "slider2.webp",
  "slider3.webp",
  "slider4.webp",
  "slider5.webp",
  "slider6.webp",
  "slider7.webp",
];
let currentIndex = 0;
function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  slider.src = images[currentIndex];
}

setInterval(changeImage, 3000);
