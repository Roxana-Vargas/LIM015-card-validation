const validator = {
  isValid: function(numeros) {
    // let numeros=document.getElementById("numeros").value; //obteniendo el valor
    let newArray= Array.from(numeros); 
    let numeroInverso= newArray.reverse(); //invertir el número, parseo
    let convertir= numeroInverso.map(Number);
      for (let i = 0; i < convertir.length; ++i) {
        if (i % 2 != 0) {
          convertir[i]*=2;
          if (convertir[i]>9){
          convertir[i]-=9;
          }
        }
      }
    let suma= 0;
      for(let i = 0; i < convertir.length; i++){
        suma += convertir[i];
      }
    let resto= suma%10;
      if (resto === 0) {
      return true;
      }
      else {
      return false;
      }
  },

  maskify: function(numeros) {
    let cuatroDigitos;
    cuatroDigitos = numeros.split('').map((letter, index) => 
    index < numeros.length - 4 ? '#' : letter).join('');
    return cuatroDigitos;
  },

  getIssuer: function(numeros){

    let newArray= Array.from(numeros);
    let convertirNumeros= newArray.map(Number);
    if ((convertirNumeros.length==16||convertirNumeros.length==13) && convertirNumeros[0]==4){
      return "¡Tu tarjeta Visa";
    } else if (convertirNumeros.length==16 && (convertirNumeros[0,1]==5,1 || convertirNumeros[0,1]==5,2 ||convertirNumeros[0,1]==5,3 || convertirNumeros[0,1]==5,4 || convertirNumeros[0,1]==5,5)){
      return " Tu tarjeta Mastercard";
    } else if (convertirNumeros.length==15 && (convertirNumeros[0,1]==3,4 || convertirNumeros[0,1]==3,5 ||convertirNumeros[0,1]==3,6 || convertirNumeros[0,1]==3,7)){
      return "Tu tarjeta American";
    }
  }

};

export default validator;
