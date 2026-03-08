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

---

## Guardar JSON en `sessionStorage`
Como Web Storage guarda **texto**, para almacenar objetos o arreglos se usa `JSON.stringify()` al guardar y `JSON.parse()` al recuperar. citeturn0search11turn0search8

### Guardar un objeto JSON
```js
const usuario = {
  nombre: "Iñaki",
  rol: "estudiante",
  autenticado: true
};

sessionStorage.setItem("usuario", JSON.stringify(usuario));
```

### Recuperar un objeto JSON
```js
const usuarioGuardado = JSON.parse(sessionStorage.getItem("usuario"));
console.log(usuarioGuardado.nombre);
```

### Guardar un arreglo JSON
```js
const tracks = ["deja vu", "me rehúso", "baile inolvidable"];
sessionStorage.setItem("tracks", JSON.stringify(tracks));
```

### Recuperar un arreglo JSON
```js
const tracksGuardados = JSON.parse(sessionStorage.getItem("tracks"));
console.log(tracksGuardados);
```

---

## Diferencias entre `localStorage` y `sessionStorage`

| Aspecto | `localStorage` | `sessionStorage` |
|---|---|---|
| Duración de los datos | Persiste entre sesiones del navegador | Solo dura durante la sesión de la pestaña |
| Alcance | Se comparte por origen | Se separa por origen **y** por pestaña |
| Uso típico | Preferencias, temas, datos que deban seguir después | Tokens temporales, formularios en progreso, estado momentáneo |
| Se borra al cerrar pestaña | No necesariamente | Sí |

MDN indica que `localStorage` guarda datos entre sesiones del navegador, mientras que `sessionStorage` conserva datos únicamente durante la sesión de la página actual. citeturn0search1turn0search0

---

## Similitudes entre `localStorage` y `sessionStorage`
- Ambos forman parte de la **Web Storage API**. citeturn0search11turn0search8
- Ambos almacenan datos en formato **clave-valor**. citeturn0search11turn0search8
- Ambos guardan la información como **strings**. Si quieres guardar objetos, debes convertirlos con `JSON.stringify()`. citeturn0search11
- Ambos usan la misma interfaz `Storage`, por eso comparten métodos como `setItem()` y `getItem()`. citeturn0search8

---

## Ejemplo comparativo
```js
// localStorage: persiste aunque cierres el navegador
localStorage.setItem("tema", "oscuro");

// sessionStorage: vive mientras la pestaña siga abierta
sessionStorage.setItem("token", "abc123");
```

---

## Conclusión
`sessionStorage` sirve cuando necesitas guardar datos de forma **temporal** y asociados a una sola pestaña, por ejemplo un token de acceso usado en una práctica o el estado momentáneo de una vista. En cambio, `localStorage` conviene más cuando quieres que los datos permanezcan disponibles incluso después de cerrar el navegador, como configuraciones o preferencias del usuario. citeturn0search0turn0search1

---

## Fuentes
- MDN: `sessionStorage` y Web Storage API. citeturn0search0turn0search11turn0search8
- MDN: `localStorage`. citeturn0search1
