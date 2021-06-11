import validator from './validator.js';


document.getElementById("btnHawaiana").addEventListener("click", function(){mostrar("div2")});
document.getElementById("btnAmericana").addEventListener("click", function(){mostrar("div2")});
document.getElementById("btnPepperoni").addEventListener("click", function(){mostrar("div2")});
document.getElementById("btnVegetariana").addEventListener("click", function(){mostrar("div2")});
document.getElementById("btnValidar").addEventListener("click", function(){mostrar("div3")});
document.getElementById("numeros").addEventListener("keypress", function(e){numeros(e)});



/*Permitir solamente numeros*/

function numeros(e) {
  if((e.keyCode < 48) || (e.keyCode > 57)){
    e.returnValue = false;
  } 
}

/*Ocultar y mostrar elementos de html*/
function mostrar(id){
  if(id=="div2"){
  document.getElementById("div2").style.display = "block";
  document.getElementById("div1").style.display = "none";
  document.getElementById("div3").style.display = "none";
  } else if(id=="div3" ){
  let numeros=document.getElementById("numeros").value || alert("Debes ingresar el número de tu tarjeta");
  let resultado= validator.isValid(numeros);
  let digitos=validator.maskify(numeros);
  if(numeros!=""){
  document.getElementById("div3").style.display = "block";
  document.getElementById("div2").style.display = "none";
  document.getElementById("div1").style.display = "none";
  document.getElementById("validacion").innerHTML= resultado ? "¡Tu tarjeta es válida!":"¡Tu tarjeta no es válida!";
  document.getElementById("digitos").innerHTML= digitos;
  }
  // console.log(numeros);
  }
}










