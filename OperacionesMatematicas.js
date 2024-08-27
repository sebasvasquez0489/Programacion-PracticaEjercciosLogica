/*Realizar una funcion que permita realizar las 4 operaciones aritmeticas, es decir , que permita sumar, restar , multiplicar y dividir. La funcion debe llevar 3 parametros dos de ellos deben ser los valores (a y b) y el otro el nombre de la operación en minusculas. Si el parametro de la operación no es valido mostrar un error personalizado por consola*/

function operacionesAritmeticas(num1, num2, operacion) {
  //Convertimos todo en minisculas
  operacion = operacion.toLowerCase();
  //Declaramos variable para almacenar resultado de la operación
  let resultado;
  //validamos los casos
  switch (operacion) {
    case "suma":
      resultado = num1 + num2;
      break;
    case "resta":
      resultado = num1 - num2;
      break;
    case "multiplicacion":
      resultado = num1 * num2;
      break;
    case "division":
      resultado = num1 / num2;
      break;
    //Mostramos mensaje de error
    default:
      console.console.error(`El valor de ${operacion} no es valido`);
  }
  //Retornamos el resultado de la operacion
  console.log(`El resultado de la ${operacion} es : ${resultado}`);
}

//EJECUCION DE FUNCION
operacionesAritmeticas(10, 5, "suma");
operacionesAritmeticas(10, 5, "resta");
operacionesAritmeticas(10, 5, "multiplicacion");
operacionesAritmeticas(10, 5, "division");
