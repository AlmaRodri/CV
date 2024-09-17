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
        elem.style.width = tam + "vw"; //vw es la medida relativa al ancho de la ventana
      }
    }
  }
}


// animación de barras de progreso
function texto() {
  const texto = "Estudiante universitario en Licenciatura en Ingeniería en Sistemas Computacionales.";
    const letras = document.getElementById('texto');
    letras.innerHTML = ""; // Limpiar el contenido anterior
    let tam = 0;
    id = setInterval(frame1, 70);
 	letras.innerHTML = "";
    function frame1() {
      if (tam < texto.length) {
        letras.innerHTML += texto[tam]; // Mostrar letra por letra
        tam++;
      } else {
        clearInterval(id); // Detener el intervalo cuando se complete el texto
      }
    }
  
}

function enviar(nombre,correo,mensaje1){
	 if (nombre.value === "") {
    mensaje.innerHTML = "El nombre es obligatorio.";
    return false;
  }
   const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!regexEmail.test(correo.value)) {
    mensaje.innerHTML = "Por favor ingrese un correo electrónico válido.";
    return false;
  }
   if (mensaje1.value === "") {
    mensaje.innerHTML = "El mensaje es obligatorio.";
    return false;
  }

  return true;
}

//carrucel
const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;

// Función para actualizar el tamaño y el desplazamiento de la imagen
function updateSizeAndPosition() {
  const size = images[0].clientWidth; // Asegúrate de que este tamaño se recoge después de que la página se haya cargado
  slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Función para moverse a la siguiente imagen
function nextSlide() {
  if (counter >= images.length - 1) counter = -1;
  counter++;
  updateSizeAndPosition();
}

// Función para moverse a la imagen anterior
function prevSlide() {
  if (counter <= 0) counter = images.length;
  counter--;
  updateSizeAndPosition();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Asegurar que el tamaño y la posición se actualicen en el redimensionamiento de la ventana
window.addEventListener('resize', updateSizeAndPosition);

// Inicializar el carrusel una vez que todas las imágenes estén cargadas
window.onload = updateSizeAndPosition;


texto();
cargas();