class MeuComponente extends HTMLElement {
  constructor() {
    super();

    const toHiden = this.getAttribute("to-hiden");

    if (toHiden !== "") {
      const shadow = this.attachShadow({ mode: "open" });

      const raiz = document.createElement("div");
      raiz.setAttribute("class", "raiz");

      const style = document.createElement("style");
      style.textContent = `
      .raiz {
        width: 500px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        border-radius: 100px;
        background-color: ${this.getAttribute("background") || "tomato"};
        color: ${this.getAttribute("color") || "back"};
        margin: 0.5rem;
        padding: 1rem;
      }
    `;

      const texto = document.createElement("div");
      texto.setAttribute("class", "texto");
      texto.textContent = `
      ${this.getAttribute("texto")} => 
      ${this.getAttributeNames()}
      ${this.getAttributeNames().includes("to-hiden") ? "to-hiden=true" : "to-hiden=false"}
      `;

      raiz.appendChild(texto);

      shadow.appendChild(style);
      shadow.appendChild(raiz);
    }
  }
}

customElements.define("meu-componente", MeuComponente);
