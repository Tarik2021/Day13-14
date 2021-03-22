// NAPOMENA: Dijelovi koda preuzeti i modificirani iz vec postojecih projekata sa stranica codepen.io i w3schools.com
var masonryImgs = document.getElementsByClassName("masonry-img");
var masonryModal = document.getElementById("masonry-modal");
var masonryModalImg = document.getElementById("modal-img");
var masonryModalContent = document.getElementById("modal-content");
var pageOverlay = document.getElementById("page-overlay");
var closeBtn = document.getElementById("masonry-close");
Array.from(masonryImgs).forEach(function (img) {
  img.addEventListener("click", masonryClick);
});
function masonryClick() {
  masonryModal.style.display = "block";
  pageOverlay.style.display = "block";
  masonryModalImg.src = this.src;
  masonryModalContent.innerHTML = this.alt;
}
closeBtn.addEventListener("click", function () {
  masonryModal.style.display = "none";
  pageOverlay.style.display = "none";
});
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}
