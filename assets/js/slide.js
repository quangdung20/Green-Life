var slideIndex = 0;
carousel();

function carousel() {
  var i;
    var x = document.getElementsByClassName("mySlides");
    console.log(x);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none !important"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
        
x[slideIndex - 1].style.display = "block !important";
setTimeout(carousel, 2000); 
}