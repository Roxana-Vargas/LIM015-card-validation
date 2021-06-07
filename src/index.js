// import validator from './validator.js';

// console.log(validator);

/*Permitir solamente numeros*/

function numeros(e) {
  if ((e.keyCode < 48) || (e.keyCode > 57)){
    e.returnValue = false;
  }
}

/*Ocultar y mostrar elementos de html*/

function showDiv2() {
  document.getElementById("div2").style.display = "block";
  document.getElementById("div1").style.display = "none";
  document.getElementById("div3").style.display = "none";
}
function showDiv3() {
  document.getElementById("div3").style.display = "block";
  document.getElementById("div2").style.display = "none";
  document.getElementById("div1").style.display = "none";
}

/*Validación de la tarjeta*/
function showNumbers() {
  let numeros=document.getElementById("numeros").value; //obteniendo el valor
  let newArray= Array.from(numeros); 
  let numeroInverso= newArray.reverse(); //invertir el número, parseo
  let convertir= numeroInverso.map(Number);
    console.log(convertir);
  let sumas= 0; //sumando las posiciones pares
    for ( i = 0; i < convertir.length; ++i) {
      if (i % 2 != 0) {
        sumas += convertir[i];
      }
    }
    console.log(sumas);
}





