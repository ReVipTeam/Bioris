const mapDiv = document.getElementById('mapDiv');
const point = document.getElementById('point');

function newArea(x, y) {
  //console.log("<div class='point' " + "style='left: "+x+"; top:"+y+";'></div>");
  mapDiv.innerHTML+="<div class='point' " + "style='left: "+x+"px; top:"+y+"px; position: absolute;'></div>"
}


mapDiv.addEventListener("click", function(e) {
  newArea(e.clientX, e.clientY);
  //point.style.setProperty('left', (''+e.clientX)+"px");
  //point.style.setProperty('top', (''+e.clientY)+"px");
})
