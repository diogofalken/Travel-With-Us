window.onscroll = toogleScrollButton;

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
    date.getDay() +
    "/" +
    date.getMonth() +
    "/" +
    date.getFullYear() +
    " " +
    horas +
    ":" +
    minutos +
    ":" +
    segundos;
  var t = setTimeout(time, 1000);
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
