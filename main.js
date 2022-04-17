const mapDiv = document.getElementById('mapDiv');
const point = document.getElementById('point');
mapDiv.addEventListener("mousemove", function(e) {
  console.log("move")
  point.style.setProperty('left', (''+e.clientX)+"px");
  point.style.setProperty('top', (''+e.clientY)+"px");
})
