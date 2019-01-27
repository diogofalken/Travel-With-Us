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
var text = ["Tokyo", "Madrid", "New York", "Lisbon", "London"];

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

$("#cities_button").click(function() {
  $("input").prop('checked', true);
});
