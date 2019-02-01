/* ---------------- SlideShow ---------------- */
var text = ["Tokyo", "Madrid", "New York", "Lisbon", "London"];
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
