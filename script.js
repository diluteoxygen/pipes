var image = document.getElementById("myImage");
var isImage1 = true;
var pipes = document.getElementById("pipes");
var timeout;
image.addEventListener("click", function() {
  if(isImage1) {
    image.setAttribute("src","11.gif");
    isImage1 = false;
  } else {
    image.setAttribute("src","sane.png");
    isImage1 = true;
  }
  clearTimeout(timeout);
  timeout = setTimeout(function(){
    if(!isImage1) {
      image.setAttribute("src","sane.png");
      isImage1 = true;
    }
  }, 2460);
  console.log("Button clicked!");
  pipes.play();
});
