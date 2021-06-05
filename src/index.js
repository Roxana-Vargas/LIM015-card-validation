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

/*Obtener los datos ingresados en el input y pasarlos a un array*/
function showNumbers() {
  let numeros=document.getElementById("numeros").value;
  console.log(numeros);
  capturar();
}
let nuevoArray= [];
  function capturar(){
    nuevoArray.push(numeros);
    console.log(nuevoArray);
}






