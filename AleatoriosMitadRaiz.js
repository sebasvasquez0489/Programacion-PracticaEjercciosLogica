/*Hacer una función que haga de forma aleatoria un número entre 1 y 1000, y que a ese número le saqué su mitad, el doble y su raíz cuadrada.*/

//* Utlizaremos el objeto "Math" y emplearemos la funcion de "floor" para redondear el numero y la funcion "random" para generar la aletoriedad *//

function numerosAleatorios() {
  // Declaramos la variable numeros y asignamos los valores aleatorio
  // Multiplicamos el metodo por el numero maximo menos el numero minimo y le sumamos el numero minimo
  let numeros = Math.floor(Math.random() * (1000 - 1) + 1);
  console.log(`El numero aleatorio es : ${numeros}`);
  // Declaramos las variable mitad, doble, raiz y asignamos el valor segun la operación a realizar
  let mitad = numeros / 2;
  let doble = numeros * 2;
  let raiz = Math.sqrt(numeros);
  console.log(`La mitad del numero ${numeros} es: ${mitad}`);
  console.log(`El doble del numero ${numeros} es : ${doble}`);
  console.log(`La raiz cuadrada del numero ${numeros} es : ${raiz}`);
}

//EJECUCION DE FUNCION
numerosAleatorios();
