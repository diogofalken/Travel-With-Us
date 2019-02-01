window.onscroll = toogleScrollButton;

/* Footer Date */
setInterval(function () {
	var data = new Date();
	document.querySelector("#hora").innerHTML = addZero(data.getDate()) + "/" + addZero(data.getMonth() + 1) + "/" + addZero(data.getFullYear()) + "\t" + addZero(data.getHours()) + ":" + addZero(data.getMinutes()) + ":" + addZero(data.getSeconds());

	/* Adiciona 0 se for menor que 10 */
	function addZero(number) {
		if (number < 10) {
			return "0" + number;
		}
		return number.toString();
	}
}, 1000);

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
