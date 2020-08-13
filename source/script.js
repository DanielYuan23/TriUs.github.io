/* Add any JavaScript you need to this file. */
var slideIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName('slides');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = 'block';
  setTimeout(carousel, 2000);
}

window.addEventListener('load', function() {
  carousel();
});
