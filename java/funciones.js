function promedioTresNumeros(num1, num2, num3) {
  const suma = num1 + num2 + num3;
  const promedio = suma / 3;
  return promedio;
}

console.log(promedioTresNumeros(4, 7, 10)); 

function cuadrado(arreglo){
    const Resultado = [];
    for (let i=0; i<arreglo.length; i++){
        Resultado.push(arreglo[i]*arreglo[i]);
    }
    return Resultado;
}

const numeros1 = [7, 8, 2];
console.log(cuadrado(numeros1));

function calcularImpuestos(venta) {
  const iva = venta * 0.16;       // 16% del monto
  const total = venta + iva;      // monto + IVA
  return [venta, iva, total];   // salida en arreglo
}

console.log(calcularImpuestos(1000));

function promedio(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma = arreglo[i] + suma;
  }
  return suma / arreglo.length;
}

const numeros2 = [5, 10, 15, 20];
console.log(promedio(numeros2)); 



