let currentSlide = 0;
const totalSlides = 3;
/* const intervalTime = 3000;
const slideContainer = document.querySelector('.carousel-slide-container');
function updateSlidePosition(){
  const slideWidth = slideContainer.offsetWidth;
  currentSlide++;
  if (currentSlide >= totalSlides) {
    currentSlide =0;
  }
  slideContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
setInterval(updateSlidePosition, intervalTime);  */
const slideContainer = document.querySelector('.carousel-slide-container');
const anteriorButton = document.getElementById('anterior');
const siguienteButton = document.getElementById('siguiente');
const carouselSlide = document.querySelectorAll(".carousel-slide");
function updateSlidePosition(){
  const slideWidth = slideContainer.offsetWidth;
  //  currentSlide+;
  if (currentSlide >= totalSlides) {
    currentSlide =0;
  }
  slideContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
 anteriorButton.addEventListener('click', function() {
  currentSlide--;
  if(currentSlide < 0){
    currentSlide = totalSlides -1;
  }
  updateSlidePosition()
});
siguienteButton.addEventListener('click', function() {
  currentSlide++;
  if(currentSlide >= totalSlides){
    currentSlide = 0;
  }
  updateSlidePosition()
});
carouselSlide.forEach(slide => {
  slide.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.2)';
    this.style.transition = 'transform 0.5s ease';
  });

  slide.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
  });
});