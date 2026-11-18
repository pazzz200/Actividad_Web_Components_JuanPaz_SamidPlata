# Actividad - Web Components, HTML Templates y frameworks

## Quienes somos

| Integrante | Que hizo |
|---|---|
| **Juan David Paz** | Preguntas 1, 2 y 3 de la Parte 1, pregunta 1 de la Parte 2 y las columnas de *Web Components* y *React*. En el codigo armo el `index.html`: el `<template>`, los estilos, el `<slot>` y las tres tarjetas. |
| **Samid Plata** | Preguntas 4 y 5 de la Parte 1, columnas de *Vue* y *Angular* y preguntas 3 y 4 de la Parte 2. En el codigo hizo el `js/main.js`: la clase, el registro, el Shadow DOM y los atributos. |
| **Los dos** | Revisamos la investigacion, buscamos las fuentes, hicimos este README y probamos todo juntos en el navegador. |

## Que escogimos

Escogimos la **tarjeta de evento para una agenda cultural**. Hicimos nuestra propia etiqueta, `<tarjeta-evento>`, que muestra:

- El nombre del evento (`titulo`)
- La fecha (`fecha`)
- El lugar (`lugar`)
- Los cupos que quedan (`cupos`)
- Una descripcion que uno escribe dentro de la etiqueta (eso lo muestra el `<slot>`)

Asi se usa:

```html
<tarjeta-evento titulo="Noche de cine" fecha="29 de noviembre" lugar="Teatro Municipal" cupos="80">
  <p>Vamos a ver cortos y despues hay charla con las directoras.</p>
</tarjeta-evento>
```

## Como esta organizado

```
README.md          -> este archivo
INVESTIGACION.md   -> las respuestas de la Parte 1 y 2, la tabla y las fuentes
index.html         -> el <template> y las 3 tarjetas
js/
  main.js          -> la clase del componente, con comentarios por requisito
```

## Donde esta cada requisito

| Requisito | Donde lo encuentras |
|---|---|
| **R1 - Template propio** | En `index.html`, el `<template id="plantilla-evento">` con su `<style>` y los espacios vacios `data-campo` que llena JavaScript. |
| **R2 - Componente** | En `js/main.js`, la clase `TarjetaEvento` que extiende `HTMLElement`, crea su Shadow DOM, copia el template y se registra con `customElements.define()`. |
| **R3 - Atributos** | En `js/main.js`, la funcion `mostrarDatos()` lee `titulo`, `fecha`, `lugar` y `cupos` y los pone en la tarjeta. |
| **R4 - Slot** | En `index.html`, el `<slot>` dentro del template donde sale la descripcion. |
| **R5 - Reutilizacion** | En `index.html`, las tres `<tarjeta-evento>` con datos distintos. |

En el codigo cada requisito tiene su comentario: `// R1`, `// R2`... en JavaScript y `<!-- R1 -->` en HTML.

## Como probarlo

No hay que instalar nada, porque no usamos librerias, frameworks ni npm.

1. Descarga o clona el repositorio.
2. Abre `index.html` en el navegador (Chrome, Edge, Firefox o Safari). Puedes darle doble clic o usar *Live Server* en VS Code.
3. Deberias ver **tres tarjetas**, cada una con su evento, fecha, lugar, cupos y descripcion.
4. Presiona F12 para abrir las herramientas del navegador:
   - En **Console** no debe salir ningun error.
   - En **Elements**, cada `<tarjeta-evento>` tiene adentro un `#shadow-root (open)` con la copia del template.
5. Si quieres ver que los atributos funcionan, escribe esto en la consola:

   ```js
   document.querySelector('tarjeta-evento').setAttribute('cupos', '0')
   ```

   y vas a ver que la primera tarjeta cambia al instante.

## Uso de inteligencia artificial

Usamos **Claude (de Anthropic)** como apoyo, como si fuera un tutor, para:

- Repartirnos las tareas y organizar el proyecto.
- Tener una primera version del codigo y de las respuestas.
- Revisar que no se nos quedara ningun requisito de la rubrica.

Despues cada uno reviso su parte, la probo, la cambio a su manera de escribir y comparo la informacion con las fuentes oficiales que estan en `INVESTIGACION.md`. Los dos podemos explicar con nuestras palabras como funciona el componente y cada respuesta.
