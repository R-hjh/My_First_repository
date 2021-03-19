function establecerColorP() {
  //obtener una lista de todos los lementos del cuerpo
  //y seleccionar el elemnto numero 0
  myBody = document.getElementsByTagName("body")[0];

  //obtener todo los elemento p que son decedientes del cuerpo
  myBodyElements = myBody.getElementsByTagName("p");

  //obtener el segundo elemento de la lista de elemtos p
  myP = myBodyElements[1];
  myP.style.background = "rgb(255, 0, 0)";
  
}
