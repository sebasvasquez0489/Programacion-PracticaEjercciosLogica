/*Realizar una tabla de multiplicación de un numero (a) de 0 hasta X, pero que no se muestre la multiplicación d a * 5. */
function tablaMultiplicacion(num1, num2) {
  //Creamos variable para almacenar el resultado
  let resultado;
  //Creamos un bucle para recorrer de 0 a num2
  for (let i = 0; i <= num2; i++) {
    resultado = num1 * i;
    //Si el resultado es igual a 5 * num1, no lo mostramos
    if (i !== 5) console.log(`${num1} X ${i} = ${resultado}`);
  }
}

//EJECUCION DE LA FUNCION
tablaMultiplicacion(5, 6);
