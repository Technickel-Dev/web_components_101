const template = document.createElement("template");
template.innerHTML = `
  <style>
    .icon {
      width: 24px;
      height: 24px
    }
  </style>
  
  <slot name="svg">
    <svg class="icon" viewBox="0 0 24 24">
      <path
        fill="#FEE227"
        d="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z"
      />
    </svg>
  </slot>
`;

class Lightbulb extends HTMLElement {
  constructor() {
    super()
      .attachShadow({ mode: "open" })
      .append(template.content.cloneNode(true));
  }
}

window.customElements.define("lightbulb-component", Lightbulb);
