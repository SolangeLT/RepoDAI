const alumnos = [];

console.log("imprimo arreglo vacio");
console.log(alumnos);

console.log("agrego alumno al arreglo");
alumnos.push("MARIO");
console.log(alumnos);

console.log("agrego alumno al arreglo");
alumnos.push("SOL");
console.log(alumnos);

console.log("agrego alumno al arreglo");
alumnos.push("PEPITO");
console.log(alumnos);

console.log("elimino el ultimo alumno del arreglo");
alumnos.pop();
console.log(alumnos);

alumnos.push("PEPITO");

const alumnosMinusculas = alumnos.map((alumno) => alumno.toLowerCase()); // map: crea un nuevo arreglo con esa funcion
console.log("alumnos minusculas");
console.log(alumnosMinusculas);