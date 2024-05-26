class WebComponent extends HTMLElement {
  inner = this.attachShadow({ mode: 'closed' })
  constructor() {
    super()
  }
  connectedCallback() {
    const color = this.getAttribute('color') || 'black'
    this.inner.innerHTML = /* html */ `
      <input value="${color}" />
    `
  }
}

export const tagname = 'web-component'

window.customElements.define(tagname, WebComponent)
export default tagname
