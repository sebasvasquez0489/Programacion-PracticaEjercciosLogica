/*Hacer una función que filtre todos los números que sean múltiplos del 3 de un arreglo que contenga los números del 1 al 100*/

function fitrarMultiplos() {
  //Se declaran variables de los arreglos
  let arrayNumeros = [];
  let arrayMultiplos = [];
  //Se llenan los arreglos
  for (let i = 1; i <= 100; i++) {
    arrayNumeros.push(i); // se van agregando los números del 1 al 100
  }
  console.log(`Arreglo de numeros : ${arrayNumeros}`);
  // Se filtra arreglo de numeros con el metodo "FILTER"
  arrayNumeros.filter((element) => {
    // Se valida que sean multiplos de 3 y se agregan al arreglo
    if (element % 3 === 0) arrayMultiplos.push(element);
  });
  console.log(`Arreglo de multiplos : ${arrayMultiplos}`);
}

// EJECUCION DE FUNCION
fitrarMultiplos();
