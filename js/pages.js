/* For the View More button */ 
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
