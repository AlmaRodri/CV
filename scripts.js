function color1() {
	if (document.getElementById('bt1').className =="modo_claro") {
	document.getElementById('bt1').className = "modo_oscuro";
	document.getElementsByClassName('col-left')[0].className = "col-left-oscura";
	document.getElementsByClassName('col-right')[0].className = "col-right-oscura";
	document.getElementsByClassName('content')[0].className = "content-oscura";
	}
	else
	{
	document.getElementById('bt1').className = "modo_claro"
	document.getElementsByClassName('col-left-oscura')[0].className = "col-left";
	document.getElementsByClassName('col-right-oscura')[0].className = "col-right";
	document.getElementsByClassName('content-oscura')[0].className = "content";
	}
}

// animación de barras de progreso
function cargas() {
  const barras = ["CargaC", "CargaJ", "CargaP", "CargaJS", "CargaD", "CargaCV","CargaH","CargaCSS"];
  const largos = [15, 25, 10, 10, 30, 10,6,6];

  for (let i = 0; i < barras.length; i++) {
    let id = null;
    
    const elem = document.getElementById(barras[i]);
    
    let tam = 0;
    id = setInterval(frame, 20);

    function frame() {
      if (tam == largos[i]) {
        clearInterval(id);
      } else {
        tam++;
        elem.style.width = tam + "vw"; // Ajusta el tamaño en "vw"
      }
    }
  }
}

cargas();