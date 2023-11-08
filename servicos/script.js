var slideIndex = 0;
var timer;

showSlides(slideIndex);

function showSlides(n) {
  var slides = document.getElementsByClassName("slideshow-image");
  var dots = document.getElementsByClassName("dot");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("active");
  timer = setTimeout(showSlides, 3000);
}

function currentSlide(n) {
  clearTimeout(timer);
  slideIndex = n;
  showSlides(slideIndex-1);
}

var dots = document.getElementsByClassName("dot");
for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    currentSlide(Array.prototype.indexOf.call(dots, this) + 1);
  });
}

const showOptionsButton = document.getElementById('showOptions');
const optionsContainer = document.getElementById('optionsContainer');

showOptionsButton.addEventListener('click', () => {
  optionsContainer.style.display = 'block';
});
