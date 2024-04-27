// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  fetch('/header.html')
    .then(response => response.text())
    .then(header => document.getElementById('header-placeholder').innerHTML = header);

  fetch('/footer.html')
    .then(response => response.text())
    .then(footer => document.getElementById('footer-placeholder').innerHTML = footer);
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
