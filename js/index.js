/* ---------------- SlideShow ---------------- */
// var i = 1;
// var slide = document.getElementById("slideshow");
// var slide_text = document.getElementById("text");
// var images = [
//   "../images/tokyo.jpeg",
//   "../images/madrid.jpeg",
//   "../images/newyork.jpeg",
//   "../images/lisboa.jpeg",
//   "../images/london.jpeg"
// ];
 var text = ["Tokyo", "Madrid", "New York", "Lisbon", "London"];

// function slideshow() {
//   if (i == 5) {
//     i = 0;
//   }
//   slide.style.backgroundImage = "url(" + images[i] + ")";
//   slide_text.innerHTML = text[i];
//   i++;

//   setTimeout("slideshow()", 3000);
// }
// slideshow();

var index = 0;
slideshow();

function slideshow() {
  var i;
  var x = document.getElementsByClassName("slides");
  var slide_text = document.getElementById("text");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  index++;
  if (index > x.length) {index = 1}    
  x[index-1].style.display = "block";  
  slide_text.innerHTML = text[index - 1];
  setTimeout(slideshow, 3000); 
}

/* Button to press the menu using JQuery */ 
$("#cities_button").click(function() {
  $("input").prop('checked', true);
});
