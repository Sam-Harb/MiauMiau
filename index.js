let currentSlide = 0;
const totalSlides = 3;
const intervalTime = 3000;
const slideContainer = document.getElementById('carousel-slide-container');
function updateSlidePosition(){
  const slideWidth = 100;
  currentSlide++;
  if (currentSlide >= totalSlides) {
    currentSlide =0;
  }
  slideContainer.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
}
setInterval(updateSlidePosition, intervalTime);