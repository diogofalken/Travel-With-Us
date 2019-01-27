var read_more = document.getElementById("read-more");
var more_info = document.getElementById("more");

read_more.addEventListener("click", function() {
  if (more_info.style.display == "block") {
    more_info.style.display = "none";
    read_more.innerHTML = "More";
  } else {
    more_info.style.display = "block";
    read_more.innerHTML = "Close";
  }
});
/*
$(document).ready(function() {
  if ($(window).width() <= 700) {
    $(".things").css("width", "37.5");
  } else if ($(window).width() <= 500) {
    $(".things").css("width", "100");
  }
});
*/
