/* Realizar una funcion que almacene en un arreglo todo los numeros pares desde a hasta b */

function almacenaPares(a, b) {
  //Creamos variable del arreglo para almacenar los numeros
  let arrayNums = [];
  //Creamos un ciclo for para recorrer los numeros del "a" al "b"
  for (i = a; i < b; i++) {
    // Si el numero es par lo agregamos al arreglo
    // Utilizamos el metodo "Push"para agregar los numeros
    if (i % 2 == 0) arrayNums.push(i);
  }
  //Retornamos el arreglo con los numeros pares
  console.log(arrayNums);
}

//EJECUCIÓN DE LA FUNCIÓN
almacenaPares(10, 20);
