function myMove() {
  var elem = document.getElementById("animado");
  var pos = 0;
  var id = null;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame(){
    if (pos == 350) {
      clearInterval(id);
    }else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }

}
