function generar_tabla() {
  //obtener la referencia para el cuerpo
  var body = document.getElementsByTagName("body")[0];

  //crear un elemento tabla y un elemento CuerpoTabla <tbody>
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  //crear todas las celdas
  for (var i = 0; i < 2; i++) {
    //crear un renglo de la tabla
    var row = document.createElement("tr");
    for (var j = 0; j < 2; j++) {
      //crear un <td> y un texto
      //colocar el texto en el <td> y colocar el <td>
      //al final de la tabla
      var cell = document.createElement("td");
      var celltext = document.createTextNode("cell in row "+i+", colum "+j);
      cell.appendChild(celltext);
      row.appendChild(cell);

    }
    //Agregar el renglo al final de cuerpo de la tabla
    tblBody.appendChild(row);
  }

  //poner el CuerpoTabla <tbody> en la tabla <tabla>
  tbl.appendChild(tblBody);
  //anexar la tabla en el cuerpo de la pagina
  body.appendChild(tbl);

  //para finalizar le asignamos a las propieda borde
  //el valor 2
  tbl.setAttribute("border", "2");
}
