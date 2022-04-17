const mapDiv = document.getElementById('mapDiv');
const point = document.getElementById('point');
mapDiv.addEventListener("click", (e) => {
  console.log("move")
  point.style.setProperty('left', (''+e.mouseX)+"px");
  point.style.setProperty('top', (''+e.mouseY)+"px");
})
