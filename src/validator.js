const validator = {
  isValid: function(numeros) {
    // let numeros=document.getElementById("numeros").value; //obteniendo el valor
    let newArray= Array.from(numeros); 
    let numeroInverso= newArray.reverse(); //invertir el número, parseo
    let convertir= numeroInverso.map(Number);
      // console.log(convertir);
      for (let i = 0; i < convertir.length; ++i) {
        if (i % 2 != 0) {
          convertir[i]*=2;
          if (convertir[i]>9){
          convertir[i]-=9;
          }
        }
      }
    // console.log(convertir);
    let suma= 0;
      for(let i = 0; i < convertir.length; i++){
        suma += convertir[i];
      }
      // console.log(suma);
    let resto= suma%10;
      // console.log(resto)
      if (resto === 0) {
      return true;
      }
      else {
      return false;
      }
  },

  maskify: function(totalDigitos) {
    // let totalDigitos=document.getElementById("numeros").value; //capturando el valor
    // console.log (totalDigitos);
    let cuatroDigitos;
    cuatroDigitos = totalDigitos.split('').map((letter, index) => 
    index < totalDigitos.length - 4 ? '#' : letter).join('');
    return cuatroDigitos;
    // document.getElementById("digitos").innerHTML = cuatroDigitos;
  }

};

export default validator;
