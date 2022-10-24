let slideIndex = 0;
showSlides();

let pfIndex = 1;
showSlides2(pfIndex);

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("pf");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {pfIndex = 1}
  if (n < 1) {pfIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[pfIndex-1].style.display = "block";
  dots[pfIndex-1].className += " active";
}

// Next/previous controls
function plusSlides(n) {
  showSlides2(pfIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides2(pfIndex = n);
}

const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll('.navbar').forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))
