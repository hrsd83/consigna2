// 1- Crear un bucle que muestre en consola la tabla de multiplicar de un número definido en una variable.

// let base = 9;
// let limit = 10;

// for(let i = 1; i <= limit; i++){
//   let result = base * i;
//   console.log(base + 'x' + i + ' = ' + result );
// }

// 2- Crear una función que determine si un número es primo.
// function esPrimo(numero) {
//   // Casos especiales
//   if (numero == 0 || numero == 1 || numero == 4) return false;
//   for (let x = 2; x < numero / 2; x++) {
//     if (numero % x == 0) return false;
//   }
//   // Si no se pudo dividir por ninguno de los de arriba, sí es primo
//   return true;      
// }
// primos = 0;
// for(let i=0; primos < 100; i++) {
//   let cond = esPrimo(i)
//   if(cond) {
//     primos++;
//     console.log(primos +' - '+ i + ' es primo');
//   }
// }

// // 3- Mostrar los números primos entre 0 y 100.

// i = 0;
// pares = 0;
// while( i <= 100) {
//   if( i % 2 === 0) {
//     console.log(i + ' Es Primo');
//     pares += 1;
//   }
//   i += 1; 
// }

//4- Mostrar los primeros 100 números primos.

// pares = 0;

// for( let i= 0; pares < 100; i++){
//   if(i % 2 === 0 ){
//     console.log(i + ' Es numero par')
//     pares += 1;
//   }
// }

// 5- Crear una función que reciba dos parámetros numéricos, luego los sume, calcule el promedio y luego devuelva como resultado el promedio. Mostrar mediante alert el resultado.


// function calculateAverage(number1, number2){
//   number1 = parseInt(prompt('Ingresar un numero:'));
//   number2 = parseInt(prompt('Ingresa otro numero:'));

//   sum = number1 + number2;
//   average = sum / 2;
//   return average;
// };
// alert('El promedio de los numeros es: ' + calculateAverage());






