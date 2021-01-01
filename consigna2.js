// 1- Crear un bucle que muestre en consola la tabla de multiplicar de un número definido en una variable.

let base = 9;
let limit = 10;

for(let i = 0; i <= limit; i++){
  let result = base * i;
  console.log(base + 'x' + i +'= ' + result );
}

// 2- Crear una función que determine si un número es primo.
function esPrimo(numero) {
  
  if (numero == 0 || numero == 1 || numero == 4) return false;
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) return false;
  }
 
  return true;      
}
console.log(esPrimo(4));
console.log(esPrimo(3));



// // 3- Mostrar los números primos entre 0 y 100.

for(let i=0; i < 100; i++){
  if(esPrimo(i)){
    console.log(i + ' Es primo')
  }
}

//4- Mostrar los primeros 100 números primos.

primos = 0;

for( let i= 0; primos < 100; i++){
  let cond = esPrimo(i);{
    if(cond){
      primos++;
      console.log(primos + ' - ' + i + ' Es primo');
    }
  }
  }


// 5- Crear una función que reciba dos parámetros numéricos, luego los sume, calcule el promedio y luego devuelva como resultado el promedio. Mostrar mediante alert el resultado.


num1 = parseInt(prompt('Ingresar un numero:'));
num2 = parseInt(prompt('Ingresa otro numero:'));

function calculateAverage(num1, num2){
  sum = num1 + num2;
  average = sum / 2;
  return average;
};
alert('El promedio de los numeros es: ' + calculateAverage(num1, num2));






