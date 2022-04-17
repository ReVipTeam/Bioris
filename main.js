const mapDiv = document.getElementById('mapDiv');
const point = document.getElementById('point');

function newArea(x, y, r, c) {
  //console.log("<div class='point' " + "style='left: "+x+"; top:"+y+";'></div>");
  //background-color: red;
  //box-shadow: 0 0 120px 100px red;
  console.log("<div class='point' style='left: "+x+"px; top:"+y+"px; background-color: rgb("+c*255+", "+(1-c)*255+", 0); box-shadow: 0 0 "+r+"px "+(r-20)+"px rgb("+c*255+", "+(1-c)*255+", 0);'></div>");
  mapDiv.innerHTML+="<div class='point' style='left: "+x+"px; top:"+y+"px; background-color: rgb("+c*255+", "+(1-c)*255+", 0); box-shadow: 0 0 "+r+"px "+(r-20)+"px rgb("+c*255+", "+(1-c)*255+", 0);'></div>"
}


mapDiv.addEventListener("click", function(e) {
  newArea(e.clientX, e.clientY, 20+Math.random()*200, Math.random());
  //point.style.setProperty('left', (''+e.clientX)+"px");
  //point.style.setProperty('top', (''+e.clientY)+"px");
})
