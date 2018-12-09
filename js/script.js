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
  slide.style.transition = "opacity 1s ease-out";
  i++;
  setTimeout("slideshow()", 3000);
}

/* Footer Date */
function time() {
  var date = new Date();
  var horas = date.getHours();
  var minutos = date.getMinutes();
  var segundos = date.getSeconds();
  minutos = checkTime(minutos);
  segundos = checkTime(segundos);

  document.getElementById("hora").innerHTML =
    horas + ":" + minutos + ":" + segundos;
  var t = setTimeout(time, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // adiciona zero na esquerda dos numeros < 10
  return i;
}

// Visto que nao existe maneira de ter duas funcoes a dar window.load ao mesmo tempo tive de fazer esta funcao
window.onload = slideshow;
var current = window.onload;
window.onload = function() {
  if (current) {
    current();
  }
  time();
};
