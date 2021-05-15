/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar 
  ps= previous scroll position
  cs= current scroll position
*/
var ps = window.pageYOffset;
window.onscroll = function() {
  var cs = window.pageYOffset;
  if (ps > cs) {
    document.getElementByClassName("top-container").style.top = "0";
  } else {
    document.getElementByClassName("top-container").style.top = "-50px";
  }
  ps = cs;
}