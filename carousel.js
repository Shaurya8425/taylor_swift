let index = 0;
const slides = document.querySelector(".carousel-images");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function updateCarousel() {
   const images = document.querySelectorAll(".carousel img");
   const imgWidth = images[0].clientWidth;
   const carouselWidth = document.querySelector(".carousel").clientWidth;
   const visibleImages = Math.floor(carouselWidth / imgWidth);
   const totalImages = images.length;
   const maxIndex = totalImages - visibleImages;

   index = Math.min(index, maxIndex);
   slides.style.transform = `translateX(${-index * imgWidth}px)`;

   prevBtn.disabled = index === 0;
   nextBtn.disabled = index >= maxIndex;
}

function moveSlide(direction) {
   index += direction;
   updateCarousel();
}

window.addEventListener("resize", updateCarousel);
document.addEventListener("DOMContentLoaded", updateCarousel);