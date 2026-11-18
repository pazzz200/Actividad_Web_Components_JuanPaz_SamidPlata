// Componente <tarjeta-evento> para una agenda cultural.
// Solo JavaScript nativo: sin librerias ni frameworks.

// R2 - Componente: clase que extiende HTMLElement.
class TarjetaEvento extends HTMLElement {

  // R3 - Atributos: lista de atributos que el componente observa.
  static get observedAttributes() {
    return ['titulo', 'fecha', 'lugar', 'cupos'];
  }

  constructor() {
    super();

    // R2 - Se crea el Shadow DOM (modo "open") del componente.
    const shadow = this.attachShadow({ mode: 'open' });

    // R1 - Se busca el <template> propio definido en index.html.
    const plantilla = document.getElementById('plantilla-evento');

    // R2 - Se clona el contenido del template dentro del Shadow DOM.
    // cloneNode(true) copia tambien todos los elementos hijos.
    shadow.appendChild(plantilla.content.cloneNode(true));
  }

  // Se ejecuta cuando la tarjeta se agrega a la pagina.
  connectedCallback() {
    this.mostrarDatos();
  }

  // R3 - Si un atributo cambia despues (por ejemplo desde la consola),
  // la tarjeta se actualiza sola.
  attributeChangedCallback() {
    this.mostrarDatos();
  }

  // R3 - Lee cada atributo y lo escribe en su marcador vacio del template.
  mostrarDatos() {
    TarjetaEvento.observedAttributes.forEach((nombre) => {
      const marcador = this.shadowRoot.querySelector(`[data-campo="${nombre}"]`);
      // textContent evita que se interprete HTML dentro del atributo.
      marcador.textContent = this.getAttribute(nombre) || 'Por confirmar';
    });
  }
}

// R2 - Registro del componente. El nombre lleva guion, como exige el estandar.
customElements.define('tarjeta-evento', TarjetaEvento);

// R4 - El <slot> esta en el template (index.html): no necesita codigo extra.
// R5 - Las tres instancias estan en index.html y todas usan esta misma clase.
