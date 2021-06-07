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
    for ( i = 0; i < convertir.length; ++i) {
      if (i % 2 != 0) {
        convertir[i]*=2;
        if (convertir[i]>9){
        convertir[i]-=9;
        }
      }
    }
  console.log(convertir);
  let suma= 0;
    for( i = 0; i < convertir.length; i++){
      suma += convertir[i];
    }
    console.log(suma);
  let resto= suma%10;
    console.log(resto)
    if (resto === 0) {
    console.log ("Tu tarjeta es válida");
    }
    else {
    console.log ("Tu tarjeta no es válida");
    }
  
}





