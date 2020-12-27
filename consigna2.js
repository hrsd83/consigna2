// 1- Crear un bucle que muestre en consola la tabla de multiplicar de un número definido en una variable.

let numero = 5;
for (let i = 0; i < 11; i++) {
  console.log(numero + " * " + i + " = " + numero * i);
}

// 2- Crear una función que determine si un número es primo.
function numeroPrimo(primos){

for (let primos = 1; primos <= 10; primos++) {
	if (primos % 2 == 0) {
		console.log(primos + ': Es primo');
	}else {
		console.log(primos + ': No es primo');
	}
}
}
numeroPrimo(10);

// // 3- Mostrar los números primos entre 0 y 100.
i = 0;
pares = 0;
while(pares < 50) {
  if( i % 2 === 0) {
    console.log(i + ' Es Primo');
    pares += 1;
  }
  i += 1; 
}

// // // // 4- Mostrar los primeros 100 números primos.

i = 1;
pares = 0;
while(pares < 50) {
  if( i % 2 === 0) {
    console.log(i + ' es número primo');
    pares += 1;
  }
  i += 1; 
}

// // // // 5- Crear una función que reciba dos parámetros numéricos, luego los sume, calcule el promedio y luego devuelva como resultado el promedio. Mostrar mediante alert el resultado.


function suma(number1, number2){
  result = number1 +  number2
  alert(result);
}
suma(150, 150 );




