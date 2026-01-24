let currentSlide = 0;
const slides = document.querySelectorAll('.banner img');

function showSlide(index){
  slides.forEach((slide,i)=>{
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');
}

function nextSlide(){
  currentSlide = (currentSlide +1) % slides.length;
  showSlide(currentSlide);
}

// Auto change every 5 seconds
setInterval(nextSlide,5000);

// Initialize
showSlide(currentSlide);
