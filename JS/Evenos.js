function displayDate1() {
  document.getElementById("Eje1").innerHTML = Date();
}

function displayDate2() {
  document.getElementById("Eje2").innerHTML = Date();
}

function displayDate3() {
  document.getElementById("Eje3").innerHTML = Date();
}

function Alerta() {
  alert("Hola Mundo!");
}

function sobre() {
  document.getElementById("Eje5").innerHTML += "Maous sobre el Boton<br>";
}

function click() {
  document.getElementById("Eje5").innerHTML += "Click<br>";
}

function fuera() {
  document.getElementById("Eje5").innerHTML += "Maous fuera del Boton<br>";
}

function tur() {
  var intro = new Anno([
    {
      target:'#Elemento1',
      content: 'Este es el primer Elemento'
    },
    {
      target:'#btnEjer2',
      content: "Hola Mundo"
    }
  ]);
  intro.show();
}

function Tur2(){
  var guide = $.guide({
    actions: [
      {

      }
    ]
  })
}

function tur() {
  var driver = new Driver({
    showButtons: false,
  });

  driver.defineSteps([
      {
        element: 'txt1',
        popover: {
          title: 'tur Raul',
          description: 'Este es el primer elemnto',
          position: 'right',
        },
      },
      {
        element: 'txt2',
        popover: {
          title: 'tur Raul',
          description: 'Este es el segundo elemnto',
          position: 'right',
        },
      },
      {
        element: 'txt2',
        popover: {
          title: 'tur Raul',
          description: 'Este es el segundo elemnto',
          position: 'right',
        },
      },
  ]);
  driver.start();
}
