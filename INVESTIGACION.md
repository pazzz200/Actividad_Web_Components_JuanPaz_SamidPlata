# Investigacion: Web Components, HTML Templates y frameworks

**Integrantes:** Juan David Paz - Samid Plata
**Entrega:** 18 de noviembre de 2026

> Quien hizo que: Paz respondio las preguntas 1, 2 y 3 de la Parte 1, la pregunta 1 de la Parte 2 y las columnas de *Web Components* y *React*. Samid respondio las preguntas 4 y 5 de la Parte 1, las columnas de *Vue* y *Angular* y las preguntas 3 y 4 de la Parte 2. Al final revisamos todo entre los dos.

---

## Parte 1 - Web Components

### 1. ¿Que problema resuelven y que aporta cada tecnologia? *(Paz)*

Sirven para crear piezas de pagina reutilizables sin estar copiando y pegando el mismo HTML, CSS y JS, y sin que los estilos de una parte dañen otra. Ademas vienen incluidos en el navegador, asi que funcionan en cualquier proyecto.
- **Custom Elements:** te dejan inventar tus propias etiquetas, como `<tarjeta-evento>`.
- **Shadow DOM:** le da al componente su propio espacio, con estilos que no se mezclan con los de la pagina.
- **HTML Templates:** son como un molde de HTML que no se ve hasta que lo copias para armar cada componente.

### 2. ¿En que se diferencia un `<template>` de un `<div>` oculto con `display: none`? *(Paz)*

Lo que esta dentro de un `<template>` esta "dormido": no se ve, sus scripts no se ejecutan y sus imagenes no se cargan hasta que lo clonas. Por eso `document.querySelector` no lo encuentra; hay que entrar por `template.content`.
En cambio, un `<div>` con `display: none` si esta en la pagina, solo que escondido. Sus scripts se ejecutan, sus imagenes se cargan y `document.querySelector` lo encuentra sin problema.

### 3. ¿Que cambia entre Shadow DOM `"open"` y `"closed"`? *(Paz)*

Con `"open"`, desde afuera puedes entrar al componente usando `elemento.shadowRoot`, por ejemplo para revisar algo desde la consola. Con `"closed"`, `elemento.shadowRoot` devuelve `null` y solo el propio componente puede entrar.
En los dos casos los estilos quedan igual de aislados; lo unico que cambia es el acceso desde JavaScript. Nosotros usamos `"open"` porque es mas facil de revisar y es el mas comun.

### 4. ¿Que es un `<slot>` y para que sirve? *(Samid)*

Un `<slot>` es un espacio que dejas dentro del componente para que quien lo use meta su propio contenido. Lo que escribes entre `<tarjeta-evento>` y `</tarjeta-evento>` aparece justo donde esta el slot.
Sirve para que el mismo componente se adapte a distintos casos sin tocar su codigo. En nuestra tarjeta lo usamos para la descripcion, que cambia en cada evento. Si no escribes nada, sale un texto por defecto.

### 5. ¿Que navegadores soportan hoy los Web Components? *(Samid)*

Segun Can I use (lo consultamos el 17 de noviembre de 2026), los soportan Chrome, Edge, Firefox, Opera y Safari, tanto en computador como en celular. Eso es mas o menos el 97 % de los usuarios del mundo.
Safari aparece con soporte "parcial" porque no acepta una variante poco usada (`is="..."`), pero las etiquetas propias normales, como la nuestra, si funcionan. Los unicos que no los soportan son Internet Explorer y Opera Mini.
Fuentes: [Custom Elements v1](https://caniuse.com/custom-elementsv1) y [Shadow DOM v1](https://caniuse.com/shadowdomv1) en Can I use, consultadas el 17/11/2026.

---

## Parte 2 - Frameworks, librerias y Node.js

### 1. Estandar, libreria, framework y entorno de ejecucion *(Paz)*

Pensemoslo como cocinar en casa:
- **Estandar del navegador:** es lo que ya trae la cocina: la estufa y el horno. No instalas nada. *Ejemplo:* los Web Components o `fetch`.
- **Libreria:** es una herramienta que **tu decides cuando usar**, como una licuadora. Tu sigues mandando en la receta. *Ejemplo:* React, que solo se encarga de la interfaz.
- **Framework:** es una receta completa que **te dice que hacer y en que orden**; tu solo llenas los pasos. *Ejemplo:* Angular, que ya trae rutas, formularios y estructura de carpetas.
- **Entorno de ejecucion:** es el lugar donde se puede cocinar. *Ejemplo:* Node.js, que permite correr JavaScript fuera del navegador, en un servidor o en la terminal.

### 2. Tabla comparativa *(Paz: Web Components y React - Samid: Vue y Angular)*

| Criterio | Web Components nativos | React | Vue | Angular |
|---|---|---|---|---|
| **Tipo** | Estandar del navegador: ya viene incluido. | Libreria para hacer interfaces, creada por Meta. | Framework "progresivo": puedes usar poquito o usarlo completo. | Framework completo, creado por Google. |
| **Como se crea un componente** | Con una clase que extiende `HTMLElement` y se registra con `customElements.define()`. | Con una funcion que devuelve JSX, que es como HTML escrito dentro de JavaScript. | Con un archivo `.vue` que junta el HTML, el JS y el CSS del componente. | Con una clase en TypeScript marcada con `@Component`, que se conecta a su HTML y su CSS. |
| **¿Necesita npm?** | No. Con un HTML y un JS abiertos en el navegador es suficiente. | En la practica si, porque el JSX hay que convertirlo con herramientas como Vite. | Se puede usar desde un enlace (CDN), pero en proyectos reales se usa npm. | Si. Necesitas Node.js, npm y Angular CLI para crear el proyecto. |
| **Ventajas** | Funcionan en cualquier pagina y con cualquier framework, sin instalar nada. | Es el mas usado, tiene muchisima ayuda en internet y se pide mucho en trabajos. | Es facil de aprender y su documentacion es muy clara. | Ya trae todo incluido y obliga a trabajar ordenado, lo que sirve en proyectos grandes. |
| **Desventajas** | No traen cosas como rutas o manejo de estado, asi que toca hacer mas a mano. | Solo resuelve la parte visual; lo demas (rutas, estado) toca agregarlo aparte. | Tiene menos librerias y se usa menos en empresas grandes que React. | Cuesta mas aprenderlo y es demasiado pesado para proyectos pequeños. |

### 3. ¿Que es Node.js y que tiene que ver npm con React, Vue y Angular? *(Samid)*

**Node.js no es un framework:** es un **entorno de ejecucion**, o sea, un programa que te deja correr JavaScript por fuera del navegador. Se usa para hacer servidores, conectarse a bases de datos y correr herramientas desde la terminal.
**npm** viene con Node.js y sirve para instalar paquetes. Con npm instalas React, Vue o Angular y sus herramientas. Por eso, aunque esas apps terminan corriendo en el navegador, para programarlas casi siempre necesitas tener Node.js en tu computador.

**En una tienda en linea con React y Node.js:**
- **React (en el navegador):** es lo que ve el cliente: los productos, los filtros, el carrito que se actualiza cuando agregas algo y el formulario de pago.
- **Node.js (en el servidor):** es lo que pasa por detras: busca los productos en la base de datos, revisa si hay inventario, guarda los pedidos y se conecta con el sistema de pagos.

### 4. ¿Que herramienta usariamos? *(Samid)*

**a. Un boton de chat que varias empresas pegan en sus paginas → Web Components.**
Cada empresa puede tener su pagina hecha con algo distinto (React, Angular, WordPress o HTML normal), y un Web Component funciona igual en todas. La empresa solo pega un `<script>` y la etiqueta `<chat-boton>`. Gracias al Shadow DOM, los estilos de la pagina no dañan el boton ni el boton daña la pagina. Y nadie tiene que cargar un framework completo solo por un boton.

**b. Una app web grande para un banco, con muchos equipos → Angular.**
Angular ya trae casi todo lo que se necesita (rutas, formularios, validaciones, conexion al servidor y pruebas), asi que todos los equipos trabajan con las mismas reglas. Usa TypeScript, que ayuda a encontrar errores antes de que lleguen a produccion, algo muy importante cuando hay plata de por medio. Y su estructura ordenada hace mas facil que mucha gente mantenga el mismo codigo por años.

---


## Fuentes

- MDN Web Docs - Web Components: https://developer.mozilla.org/es/docs/Web/API/Web_components (consultado el 17/11/2026)
- web.dev - Custom Elements v1: https://web.dev/articles/custom-elements-v1 (consultado el 17/11/2026)
- Can I use - Custom Elements: https://caniuse.com/custom-elementsv1 (consultado el 17/11/2026)
- Node.js - Introduction to Node.js: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs (consultado el 17/11/2026)
- npm Docs - About npm: https://docs.npmjs.com/about-npm (consultado el 18/11/2026)
- Vue.js - Introduction: https://vuejs.org/guide/introduction.html (consultado el 18/11/2026)
- Angular - What is Angular?: https://angular.dev/overview (consultado el 18/11/2026)
