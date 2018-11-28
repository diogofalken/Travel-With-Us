/* SlideShow */
var i = 1;
var slide = document.getElementById("slideshow");
var slide_text = document.getElementById("text");
var images = [
  "../images/tokyo.jpeg",
  "../images/madrid.jpeg",
  "../images/newyork.jpeg",
  "../images/lisboa.jpeg"
];
var text = ["Tokyo", "Madrid", "New York", "Lisboa"];

function slideshow() {
  if (i == 3) {
    i = 0;
  }
  slide.style.backgroundImage = "url(" + images[i] + ")";
  slide_text.innerHTML = text[i];
  i++;
  setTimeout("slideshow()", 3000);
}

window.onload = slideshow;
