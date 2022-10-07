
//assign variable to class element that contains "intro"
var showEffect = document.querySelector(".intro");

//Usage of parallex effect
window.addEventListener("scroll", function () {
  if (!showEffect) return;
  if (window.innerWidth <= 975) return;//for mobile view
  let offset = window.pageYOffset;//for vertical scrolling
  showEffect.style.setProperty(
    "background-position-y",//property name
    offset * -0.75 + "px",//property value
  );
});



