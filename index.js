let currentSlide = 0;
const slideContainer = document.getElementById(carousel-slide-container);
function updateSlidePosition(){
  const slideWidth = 100%;
  slideContainer.style.transform = 'translateX(-${currentSlide * slideWidth}%)';
}