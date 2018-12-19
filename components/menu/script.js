
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.history').style.visibility = "hidden";
  document.querySelector('.arrowLeft').style.visibility = "hidden";
  document.querySelector('.arrowRight').style.visibility = "hidden";
})

function toggleNav() {
  const element = document.querySelector("nav");
  const elementHeight = element.scrollHeight;
  var isCollapsed = element.getAttribute('data-collapsed') === 'true';
  if (isCollapsed) {
    element.style.height = 850 + "px";
    element.setAttribute("data-collapsed", "false");
    setTimeout(function () {
      document.querySelector('.history').style.visibility = "visible";
      document.querySelector('.arrowLeft').style.visibility = "visible";
      document.querySelector('.arrowRight').style.visibility = "visible";
    }, 320);
  } else {
    element.style.height = "0px";
    element.setAttribute("data-collapsed", "true");
    document.querySelector('.history').style.visibility = "hidden";
    document.querySelector('.arrowLeft').style.visibility = "hidden";
    document.querySelector('.arrowRight').style.visibility = "hidden";
  }
}

// SCRIPT HISTORY

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}