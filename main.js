const mapDiv = document.getElementById('mapDiv');
const point = document.getElementById('point');

function newArea(x, y, r, c) {
  mapDiv.innerHTML+="<div class='point' style='left: "+x+"px; top:"+y+"px; background-color: rgba("+255+", 0, 0, "+c+"); box-shadow: 0 0 "+r+"px "+(r-20)+"px rgba("+255+", 0, 0, "+c+");'></div>"
}

function newColorArea(x, y, r, c) {
  mapDiv.innerHTML+="<div class='point' style='left: "+x+"px; top:"+y+"px; background-color: "+c+"; box-shadow: 0 0 "+r+"px "+(r-20)+"px "+c+";'></div>"
}

function clear() {
  console.log(4)
  mapDiv.innerHTML = "<img draggable='false' src='map.png' id='map'>";
}

let color = "#ff0000"

let mouseDown = false

let size = 50;

mapDiv.addEventListener("mousedown", function(e) {mouseDown=true});
mapDiv.addEventListener("mouseup", function(e) {mouseDown=false});

mapDiv.addEventListener("mousemove", function(e) {
  if(mouseDown) newColorArea(e.clientX, e.clientY, size, color);
  //point.style.setProperty('left', (''+e.clientX)+"px");
  //point.style.setProperty('top', (''+e.clientY)+"px");
})

colorPicker.addEventListener("change", function() {
  color = colorPicker.value;
  //point.style.setProperty('left', (''+e.clientX)+"px");
  //point.style.setProperty('top', (''+e.clientY)+"px");
})
