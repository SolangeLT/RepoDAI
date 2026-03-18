Session Storage vs Local Storage

¿Qué es sessionStorage?

sessionStorage es una forma de almacenamiento del navegador que permite guardar pares clave-valor para una sola sesión de la página. Pertenece a la Web Storage API y funciona de forma parecida a localStorage, pero con una diferencia: sus datos duran solo mientras la pestaña o ventana actual siga abierta. Si se cierra la pestaña, la información se elimina. Además, sessionStorage se separa por origen y también por pestaña.

Métodos principales de sessionStorage

Tanto sessionStorage como localStorage usan la interfaz Storage como su nombre lo dice, por lo que comparten los mismos métodos principales: setItem(), getItem(), removeItem(), clear(), key() y la propiedad length.

Guardar un dato simple

sessionStorage.setItem("token", "abc123");

Recuperar un dato simple

const token = sessionStorage.getItem("token");
console.log(token);

Eliminar un dato

sessionStorage.removeItem("token");

Limpiar todo el sessionStorage

sessionStorage.clear();

Saber cuántos elementos hay guardados

console.log(sessionStorage.length);



Guardar JSON en sessionStorage

Como Web Storage guarda texto, para almacenar objetos o arreglos se usa JSON.stringify() al guardar y JSON.parse() al recuperar.

Guardar un objeto JSON

const usuario = {
  nombre: "Iñaki",
  rol: "estudiante",
  autenticado: true
};

sessionStorage.setItem("usuario", JSON.stringify(usuario));

Recuperar un objeto JSON

const usuarioGuardado = JSON.parse(sessionStorage.getItem("usuario"));
console.log(usuarioGuardado.nombre);

Guardar un arreglo JSON

const tracks = ["deja vu", "me rehúso", "baile inolvidable"];
sessionStorage.setItem("tracks", JSON.stringify(tracks));

Recuperar un arreglo JSON

const tracksGuardados = JSON.parse(sessionStorage.getItem("tracks"));
console.log(tracksGuardados);




Diferencias entre localStorage y sessionStorage

localStorage:

- Guarda la información de forma persistente.

- Los datos no se eliminan al cerrar el navegador.

- La información se mantiene incluso si el usuario vuelve a abrir el navegador otro día.

- Puede ser compartido entre todas las pestañas del mismo sitio web.

sessionStorage:

- Guarda la información solo durante la sesión actual.

- Los datos se eliminan cuando se cierra la pestaña o el navegador.

- Cada pestaña del navegador tiene su propio sessionStorage independiente.

- Es útil para guardar datos temporales como tokens o información de navegación.

En resumen, localStorage se usa cuando queremos guardar datos por más tiempo, mientras que sessionStorage es mejor para información temporal que solo debe existir mientras la pestaña esté abierta.


Similitudes entre localStorage y sessionStorage
- Ambos forman parte de la Web Storage API.
- Ambos almacenan datos en formato clave-valor. 
- Ambos guardan la información como strings. Si quieres guardar objetos, debes convertirlos con JSON.stringify(). 
- Ambos usan la misma interfaz Storage, por eso comparten métodos como setItem() y getItem().





