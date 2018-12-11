window.onscroll = toogleScrollButton;
/* ---------------- SlideShow ---------------- */
var i = 1;
var slide = document.getElementById("slideshow");
var slide_text = document.getElementById("text");
var images = [
  "../images/tokyo.jpeg",
  "../images/madrid.jpeg",
  "../images/newyork.jpeg",
  "../images/lisboa.jpeg",
  "../images/london.jpeg"
];
var text = ["Tokyo", "Madrid", "New York", "Lisboa", "London"];

function slideshow() {
  if (i == 5) {
    i = 0;
  }
  slide.style.backgroundImage = "url(" + images[i] + ")";
  slide_text.innerHTML = text[i];
  i++;

  setTimeout("slideshow()", 3000);
}
slideshow();
/* Footer Date */
function time() {
  var date = new Date();
  var horas = date.getHours();
  var minutos = date.getMinutes();
  var segundos = date.getSeconds();
  minutos = checkTime(minutos);
  segundos = checkTime(segundos);
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // adiciona zero na esquerda dos numeros < 10
    return i;
  }
  document.getElementById("hora").innerHTML =
    horas + ":" + minutos + ":" + segundos;
  var t = setTimeout(time, 500);
}
time();

/* Scroll Top */
function toogleScrollButton() {
  if (
    document.body.scrollTop > window.innerHeight / 2 ||
    document.documentElement.scrollTop > window.innerHeight / 2
  ) {
    showScrollButton();
  } else {
    hideScrollButton();
  }
}

function ScrollToTop() {
  document.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function showScrollButton() {
  document.getElementById("scrollTop").style.opacity = 1;
}

function hideScrollButton() {
  document.getElementById("scrollTop").style.opacity = 0;
}
