// --- SEARCH FUNCTIONALITY ---
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

// --- SLIDER FUNCTIONALITY ---
const sliderImage = document.querySelector(".slider-image");
const images = [
  "store/slider.png",
  "store/slider2.webp",
  "store/slider3.webp",
  "store/slider4.webp",
  "store/slider5.webp",
  "store/slider6.webp",
  "store/slider7.webp",
  "store/slider8.webp"
];
let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  sliderImage.src = images[currentIndex];
}

setInterval(changeImage, 3000);

// --- PRODUCT CLICK POPUP FUNCTIONALITY (TOAST VERSION) ---

// 1. Create the Toast HTML element and add it to the page
const toastElement = document.createElement("div");
toastElement.id = "toast-container";
document.body.appendChild(toastElement);

// 2. Select all product cards
const productCards = document.querySelectorAll(".card-item");

productCards.forEach((card) => {
  card.style.cursor = "pointer";

  card.addEventListener("click", () => {
    const productNameElement = card.querySelector(".lines p:first-child");
    const productName = productNameElement ? productNameElement.innerText : "This product";

    // Update the text inside the toast
    toastElement.innerText = `${productName} selected!`;

    // Add the 'show' class to trigger the CSS animation
    toastElement.classList.add("show");

    // Remove the 'show' class after 3 seconds to hide it
    setTimeout(() => {
      toastElement.classList.remove("show");
    }, 3000);
  });
});