// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  fetch('header.html')
    .then(response => response.text())
    .then(header => document.getElementById('header-placeholder').innerHTML = header);

  fetch('footer.html')
    .then(response => response.text())
    .then(footer => document.getElementById('footer-placeholder').innerHTML = footer);
});