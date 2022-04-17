const mapDiv = document.getElementById('mapDiv');
const point = document.getElementById('point');

function newArea(x, y, r, c) {
  //console.log("<div class='point' " + "style='left: "+x+"; top:"+y+";'></div>");
  mapDiv.innerHTML+="<div class='point' style='left: "+x+"px; top:"+y+"px; background-color: rgba("+255+", 0, 0, "+c+"); box-shadow: 0 0 "+r+"px "+(r-20)+"px rgba("+255+", 0, 0, "+c+");'></div>"

}


mapDiv.addEventListener("click", function(e) {
  newArea(e.clientX, e.clientY, Math.random()*200, Math.random());
  //point.style.setProperty('left', (''+e.clientX)+"px");
  //point.style.setProperty('top', (''+e.clientY)+"px");
})
